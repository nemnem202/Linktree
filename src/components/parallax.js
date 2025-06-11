import {
  motion,
  MotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { useRef } from "react";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Content({ children }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  return (
    <section id={`${children.title}`} className="section-content">
      <div ref={ref}>{children.component}</div>
      <motion.h2
        // Hide until scroll progress is measured
        initial={{ visibility: "hidden" }}
        animate={{ visibility: "visible" }}
        style={{ y }}
      >
        {children.title}
      </motion.h2>
    </section>
  );
}

export function Parallax({ childrens }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.main id="main">
      {childrens.map((child, index) => (
        <Content key={index} children={child} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
      <StyleSheet />
    </motion.main>
  );
}

/**
 * ==============   Styles   ================
 */

function StyleSheet() {
  return (
    <style>{`
            html {
                    scroll-snap-type: y mandatory;
            }

            .section-content {
                    height: 100vh;
                    scroll-snap-align: start;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: relative;
                    width:100%;
            }

            .section-content > :first-child {
              z-index: 15;
              position: relative;
              display: flex;
              flex-direction:column;
              justify-content:start
            }

            .section-content h2 {
                    color: #8df0cc;
                    margin: 0;
                    font-family: "Azeret Mono", monospace;
                    font-size: 50px;
                    font-weight: 700;
                    letter-spacing: -3px;
                    position: absolute;
                    display: inline-block;
                    top: 0%;
                    left: calc(45px + 5%);
                    width: 50%;
                    text-align: left;
                    z-index:18;
            }

            .progress {
                    position: fixed;
                    left: 0;
                    right: 0;
                    height: 5px;
                    background: #8df0cc;
                    bottom: 50px;
                    transform: scaleX(0);
            }
    `}</style>
  );
}
