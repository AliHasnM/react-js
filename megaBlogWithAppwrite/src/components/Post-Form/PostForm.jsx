/* eslint-disable react/prop-types */
import React, { useCallback } from "react";
import { useForm } from "react-hook-form"; // For form handling and validation
import { Button, Input, RTE, Select } from ".."; // Reusable UI components
import appwriteService from "../../appwrite/config"; // Service for Appwrite operations
import { useNavigate } from "react-router-dom"; // Navigation between routes
import { useSelector } from "react-redux"; // Access global state (e.g., auth)

export default function PostForm({ post }) {
  // Initialize form with default values, handle form state, validation, and submission
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "", // Pre-fill title if editing
        slug: post?.$id || "", // Generate slug based on post ID
        content: post?.content || "", // Pre-fill content if editing
        status: post?.status || "active", // Default status is "active"
      },
    });

  const navigate = useNavigate(); // For navigating to specific routes
  const userData = useSelector((state) => state.auth.userData); // Fetch current user data from Redux store

  const submit = async (data) => {
    if (post) {
      // If editing an existing post
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0]) // Upload new image if provided
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage); // Remove the old image
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined, // Update post with new image ID
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`); // Navigate to updated post
      }
    } else {
      // If creating a new post
      const file = await appwriteService.uploadFile(data.image[0]); // Upload image

      if (file) {
        const fileId = file.$id; // Get uploaded file ID
        data.featuredImage = fileId; // Attach file ID to post data
        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id, // Associate post with current user
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`); // Navigate to newly created post
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    // Generate a slug from the title
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase() // Convert to lowercase
        .replace(/[^a-zA-Z\d\s]+/g, "-") // Replace special characters with "-"
        .replace(/\s/g, "-"); // Replace spaces with "-"

    return "";
  }, []);

  React.useEffect(() => {
    // Watch for title changes to auto-generate slug
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe(); // Cleanup on unmount
  }, [watch, slugTransform, setValue]);

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      {/* Left section: Text inputs and rich text editor */}
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })} // Register title field with validation
        />
        <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })} // Register slug field with validation
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            }); // Allow manual slug editing
          }}
        />
        <RTE
          label="Content :" // Rich Text Editor for content
          name="content"
          control={control} // Integrate with react-hook-form
          defaultValue={getValues("content")} // Pre-fill content if editing
        />
      </div>

      {/* Right section: Image upload, status, and submit button */}
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :" // File input for image
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif" // Restrict file types
          {...register("image", { required: !post })} // Image is required for new posts
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)} // Preview current image
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]} // Dropdown for post status
          label="Status"
          className="mb-4"
          {...register("status", { required: true })} // Register status field with validation
        />
        <Button
          type="submit" // Submit button
          bgColor={post ? "bg-green-500" : undefined} // Change color if updating
          className="w-full"
        >
          {post ? "Update" : "Submit"} {/* Toggle button text */}
        </Button>
      </div>
    </form>
  );
}
