import { useInView, motion } from "motion/react";
import * as React from "react";

export default function FirstTextAnimation({
  text,
  size,
  delay = 0,
  center = true,
  color = "white",
}) {
  const splittedText = text.split("");

  const pullupVariant = {
    initial: { y: 10, opacity: 0 },
    animate: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05 + delay,
      },
    }),
  };
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      style={{
        display: "flex",
        fontSize: `${size}rem`,
        color: color,
        justifyContent: center ? "center" : "flex-start",
      }}
    >
      {splittedText.map((current, i) => (
        <motion.div
          key={i}
          ref={ref}
          variants={pullupVariant}
          initial="initial"
          animate={isInView ? "animate" : ""}
          custom={i}
        >
          {current == " " ? <span>&nbsp;</span> : current}
        </motion.div>
      ))}
    </div>
  );
}
