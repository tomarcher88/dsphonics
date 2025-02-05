import { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import imgPaths from "../assets/imgPaths.json";

const ExplodingGallery = () => {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "hotpink",
    },
  });

  const transApi = useSpringRef();
  const transition = useTransition(open ? imgPaths : [], {
    ref: transApi,
    trail: 400 / imgPaths.length,
    backgroundPosition: "center",
    backgroundSize: "cover",
    from: { opacity: 0, scale: 0 },
    enter: {
      opacity: 1,
      scale: 1,
      backgroundPosition: "center",
      backgroundSize: "cover",
    },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className="w-full h-full flex items-center justify-center p-5 bg-sky-200">
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className="relative grid md:grid-cols-4 grid-cols-2 gap-2 bg-slate-100 rounded-md cursor-pointer shadow-md"
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className="bg-white rounded-md will-change-auto"
            style={{ ...style, background: `url('${item}')` }}
          />
        ))}
      </animated.div>
    </div>
  );
};

export default ExplodingGallery;
