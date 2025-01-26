import imgPaths from "../assets/imgPaths.json";

const LogoGallery = () => {
  return (
    <div className="bg-white py-24 sm:py-32 sm:w-full">
      <div className="mx-auto max-w-8xl px-2 lg:px-5 sm:w-full">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Accreditation
        </h2>
        <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 lg:gap-8 sm:w-full lg:max-w-screen-2xl">
          {imgPaths.map((path, i) => {
            const imgName = path.split("/").at(-1);
            return (
              <img
                alt={imgName}
                src={path}
                // width={300}
                // height={300}
                key={i}
                className="max-h-40 lg:max-h-64 md:max-h-52 object-contain flex-shrink-0 duration-500 ease-in-out hover:scale-125"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default LogoGallery;
