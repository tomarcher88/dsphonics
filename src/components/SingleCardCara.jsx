import { useRef, useState } from "react";
import imgPaths from "../assets/imgPaths.json";
import { useSpring, animated } from "@react-spring/web";

const logos = imgPaths;

const LogoGallery = () => {
  const [index, setIndex] = useState(0);
  const totalLogos = logos.length;
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalLogos);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalLogos) % totalLogos);
  };

  const slideProps = useSpring({
    opacity: 1,
    transform: `scale(1) translateY(0px)`,
    from: { opacity: 0, transform: "scale(0.8) translateY(20px)" },
    config: { tension: 200, friction: 20 },
  });

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const difference = touchStartX.current - touchEndX;
    if (difference > 50) nextSlide();
    if (difference < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div className="relative w-full max-w-md mx-auto py-10">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Accreditations
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          ◀️
        </button>
        <div
          className="relative w-64 h-64 flex items-center justify-center"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {logos.map((logo, idx) => (
            <animated.div
              key={idx}
              className={`absolute w-56 h-56 flex items-center justify-center transition-opacity duration-500 ${
                idx === index
                  ? "opacity-100 scale-100 z-10"
                  : "opacity-0 scale-90 z-0"
              }`}
              style={idx === index ? slideProps : {}}
            >
              <img
                src={logo}
                alt={`Logo ${idx + 1}`}
                className="w-full h-auto rounded-lg shadow-md"
              />
            </animated.div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          ▶️
        </button>
      </div>
    </div>
    // <div className="bg-white py-24 sm:py-32 sm:w-full">
    //   <div className="mx-auto max-w-8xl px-2 lg:px-5 sm:w-full">
    //     <h2 className="text-center text-lg/8 font-semibold text-gray-900">
    //       Accreditation
    //     </h2>
    //     <div className="mx-auto mt-10 flex flex-wrap justify-center gap-4 lg:gap-8 sm:w-full lg:max-w-screen-2xl">
    //       {imgPaths.map((path, i) => {
    //         const imgName = path.split("/").at(-1);
    //         return (
    //           <img
    //             alt={imgName}
    //             src={path}
    //             // width={300}
    //             // height={300}
    //             key={i}
    //             className="max-h-40 lg:max-h-64 md:max-h-52 object-contain flex-shrink-0 duration-500 ease-in-out hover:scale-125"
    //           />
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
  );
};

export default LogoGallery;
