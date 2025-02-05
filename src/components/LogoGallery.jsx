import { useRef, useState } from "react";
import imgPaths from "../assets/imgPaths.json";
import { useSpring, animated } from "@react-spring/web";

const logos = imgPaths;

const LogoGallery = () => {
  const [index, setIndex] = useState(0);
  const totalLogos = logos.length;
  const touchStartX = useRef(null);

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1));
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalLogos));
  };

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

  const slideProps = useSpring({
    transform: `translateX(-${index * 100}%)`,
    config: { tension: 200, friction: 20 },
  });

  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Accreditations
      </h2>
      <div className="relative w-full flex items-center">
        <div
          className="w-full flex"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <animated.div className="flex" style={slideProps}>
            {[...logos, ...logos].map((logo, idx) => (
              <div key={idx} className="flex-none w-1/5 p-2">
                <img
                  src={logo}
                  alt={`Logo ${idx + 1}`}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            ))}
          </animated.div>
        </div>
      </div>
      <div className="absolute bottom-0 right-5 flex space-x-2">
        <button
          onClick={prevSlide}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          ◀️
        </button>
        <button
          onClick={nextSlide}
          className="p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300"
        >
          ▶️
        </button>
      </div>
    </div>
  );
};

export default LogoGallery;
