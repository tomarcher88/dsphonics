import { useState, useCallback, useRef, useEffect } from 'react'
import { useTransition, animated } from '@react-spring/web'


const AnimatedHeroText = () => {
  const ref = useRef([])
  const [items, set] = useState([])
  const transitions = useTransition(items, {
    from: {
      opacity: 0,
      maxHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "white",
      lineHeight: 1.3,
      // "-webkit-text-stroke": "1px white",
      transition: "all 250ms",
      textShadow: "0 0 0 #fff",
    },
    enter: [
      { opacity: 1, maxHeight: 400 },
      // { color: "#93b5ff" }, // pale blue
      // { "text-shadow": "4px 4px 0 #fff" },
      { transform: "perspective(600px) rotateX(0deg)" },
    ],
    leave: [
      // { "text-shadow": "0 0 0 #fff" }, // orange
      { maxHeight: 0 },
      { opacity: 0, maxHeight: 0 },
    ],
    update: {}, // pink
  });

  const reset = useCallback(() => {
    ref.current.forEach(clearTimeout)
    ref.current = []
    set([])
    ref.current.push(setTimeout(() => set(['Simplicity']), 500))
    ref.current.push(setTimeout(() => set(['Simplicity', 'Lucidity']), 1500))
    ref.current.push(setTimeout(() => set(['Simplicity', 'Lucidity', 'Performance']), 2500))
    // ref.current.push(setTimeout(() => set(['Simplicity', 'Lucidity']), 8500))
    // ref.current.push(setTimeout(() => set(['Simplicity']), 10000))
  }, [])

  useEffect(() => {
    reset()
    return () => ref.current.forEach(clearTimeout)
  }, [])

  return (
    <div className="flex items-center h-full w-full justify-center">
      <div className="mx-auto w-full lg:px-10 px-5">
        {transitions(({ innerHeight, ...rest }, item) => (
          <animated.div
            className="overflow-hidden flex justify-start items-center text-5xl lg:text-9xl font-semibold will-change-auto"
            style={rest}
            onClick={reset}
          >
            <animated.div style={{ height: innerHeight }}>
              <span className='font-header'>{item}</span>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
}

export default AnimatedHeroText;