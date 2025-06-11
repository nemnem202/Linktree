import * as motion from "motion/react-client";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [zIndex, setZIndex] = useState(10);
  const containerRef = useRef < HTMLDivElement > null;
  const { height } = useDimensions(containerRef);

  useEffect(() => {
    if (isOpen) {
      setZIndex(20);
    }
  }, [isOpen]);

  const handleAnimationComplete = () => {
    if (!isOpen) setZIndex(10);
  };

  return (
    <div>
      <div style={container}>
        <motion.nav
          className="header"
          initial={false}
          animate={isOpen ? "open" : "closed"}
          custom={height}
          ref={containerRef}
          style={{ zIndex }}
          onAnimationComplete={handleAnimationComplete}
        >
          <motion.div style={background} variants={sidebarVariants} />
          <Navigation toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
          <MenuToggle toggle={() => setIsOpen(!isOpen)} />
        </motion.nav>
      </div>
    </div>
  );
}

const navVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const Navigation = ({ toggle, isOpen }) => (
  <motion.ul
    style={{ ...list, pointerEvents: isOpen ? "auto" : "none" }}
    variants={navVariants}
  >
    {[0, 1, 2].map((i) => (
      <MenuItem i={i} key={i} toggle={toggle} />
    ))}
  </motion.ul>
);

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const parts = ["Home", "Projects", "Contact"];

const MenuItem = ({ i, toggle }) => {
  const color = `${colors[i]}`;
  return (
    <motion.li
      style={listItem}
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* <div style={{ ...iconPlaceholder, border }} /> */}
      <a
        style={{ ...textPlaceholder, color }}
        onClick={toggle}
        href={`#${parts[i]}`}
      >
        {parts[i]}
      </a>
    </motion.li>
  );
};

const sidebarVariants = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(0px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="white"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({ toggle }) => (
  <button style={toggleContainer} onClick={toggle}>
    <svg width="40" height="40" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

/**
 * ==============   Styles   ================
 */

const container = {
  position: "relative",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  flex: 1,
  maxWidth: "100%",
  height: 400,
  borderRadius: 20,
  overflow: "hidden",
};

const background = {
  background: "#292929",
  backdropFilter: "invert(1)",
  WebkitBackdropFilter: "invert(1)",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  width: "100%",
};

const toggleContainer = {
  outline: "none",
  border: "none",
  WebkitUserSelect: "none",
  MozUserSelect: "none",
  cursor: "pointer",
  position: "absolute",
  top: 10,
  left: "3%",
  width: 50,
  height: 50,
  borderRadius: "50%",
  background: "transparent",
};

const list = {
  listStyle: "none",
  padding: 25,
  margin: 0,
  position: "absolute",
  top: 0,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  left: "calc(50% - 40% - 25px)",
  width: "80%",
};

const listItem = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 0,
  margin: 0,
  listStyle: "none",
  marginBottom: 40,
  cursor: "pointer",
};

const textPlaceholder = {
  borderRadius: 5,
  flex: 1,
  display: "flex",
  justifyContent: "center",
  textDecoration: "none",
};

/**
 * ==============   Utils   ================
 */

// Naive implementation - in reality would want to attach
// a window or resize listener. Also use state/layoutEffect instead of ref/effect
// if this is important to know on initial client render.
// It would be safer to  return null for unmeasured states.
const useDimensions = (ref) => {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    if (ref.current) {
      dimensions.current.width = ref.current.offsetWidth;
      dimensions.current.height = ref.current.offsetHeight;
    }
  }, [ref]);

  return dimensions.current;
};
