/* eslint-disable react/prop-types */
// Import TinyMCE Editor and React Hook Form's Controller for integration
import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

// Functional component for a Rich Text Editor (RTE)
export default function RTE({ name, control, label, defaultValue = "" }) {
  return (
    <div className="w-full">
      {/* Conditionally render a label if provided */}
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}

      {/* Use Controller to manage form state via react-hook-form */}
      <Controller
        name={name || "content"} // Assign a default name if 'name' is not provided
        control={control} // Bind the control from react-hook-form
        render={({ field: { onChange } }) => (
          <Editor
            initialValue={defaultValue} // Set initial value for the editor
            init={{
              // TinyMCE Editor initialization settings
              initialValue: defaultValue, // Load default content
              height: 500, // Set editor height
              menubar: true, // Enable menubar for editing tools
              plugins: [
                // Add plugins for extended functionality (e.g., image, lists, code, etc.)
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "image",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                // Define toolbar layout for editor actions
                "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                // Apply custom styling to editor content
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
            onEditorChange={onChange} // Update form state when content changes
          />
        )}
      />
    </div>
  );
}
