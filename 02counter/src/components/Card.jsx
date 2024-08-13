/* eslint-disable react/prop-types */
const Card = ({
  actorName,
  actorAbout,
  actorImage,
  btnText = "Visit Profile",
}) => {
  return (
    <div className="relative h-[400px] w-[300px]">
      <img
        src={actorImage}
        alt="Actor Image"
        className="z-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-lg font-semibold text-white">{actorName}</h1>
        <p className="mt-2 text-sm text-gray-300">{actorAbout}</p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnText} →
        </button>
      </div>
    </div>
  );
};

export default Card;
