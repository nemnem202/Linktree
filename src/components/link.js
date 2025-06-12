import { AnimatePresence } from "motion/react";
import * as motion from "motion/react-client";
import { useState } from "react";
import FirstTextAnimation from "./first_text_animation";

export function Link({ work, index, children }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={blur}
          onClick={() => setIsVisible(false)}
        ></motion.div>
      )}
      <AnimatePresence initial={false}>
        {isVisible ? (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileTap={{ scale: 0.8 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.open(work.source, "_blank")}
            style={box}
            key="box"
          >
            <div style={{ overflow: "hidden", width: "100%", height: "150px" }}>
              <img
                src={work.mobileImage}
                style={{ objectFit: "cover", width: "100%" }}
              />
            </div>
            <div
              style={{
                padding: "10px",
                paddingTop: "0px",
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FirstTextAnimation
                text={work.title}
                center={false}
                color={"#8df0cc"}
              />
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ fontSize: "1rem", margin: "0", marginTop: "10px" }}
                >
                  {work.description}
                </motion.p>
                <div style={techsContainer}>
                  {work.techs.map((t, i) => (
                    <div className="tech" style={tech} key={i}>
                      {t.name}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <Button
        title={work.title}
        index={index}
        iconUrl={work.iconUrl}
        onClick={() => setIsVisible(true)}
        children={children}
      />
    </>
  );
}

export function Button({ index, iconUrl, children, onClick = () => {} }) {
  return (
    <>
      <style>
        {`
        .mask${index} {
          mask: url(${iconUrl})
              center/35px 35px no-repeat,
            linear-gradient(#000 0 0);
          mask-composite: exclude;
        }
        `}
      </style>
      <motion.div whileTap={{ scale: 0.8 }} onClick={onClick} className="box">
        <div className={`mask${index}`} style={boxInnerStyle}></div>
        {children}
      </motion.div>
    </>
  );
}

const boxInnerStyle = {
  left: -1.5,
  width: 53,
  height: 53,
  outline: "10px solid #8df0cc",
  outlineOffset: "-2px",
  borderTopLeftRadius: "0.4rem",
  borderBottomLeftRadius: "0.4rem",
  backgroundColor: "#8df0cc",
  position: "absolute",
  color: "black",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const box = {
  width: 300,
  height: 500,
  border: "2px solid #0cdcf7",
  backdropFilter: "blur(20px)",
  borderRadius: "10px",
  overflow: "hidden",
  position: "absolute",
  left: "calc(50% - 150px)",
  top: "calc(50% - 250px)",
  zIndex: 19,
  display: "flex",
  flexDirection: "column",
};

const blur = {
  backdropFilter: "blur(5px)",
  zIndex: 19,
  position: "fixed",
  width: "100vw",
  height: "100vh",
  top: 0,
  left: 0,
};

const tech = {
  borderRadius: "0.3rem",
  padding: "0.2rem 0.5rem",
  border: "1px solid #8df0cc",
  color: "#8df0cc",
  fontSize: "15px",
  width: "max-content",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 8px",
};

const techsContainer = {
  display: "flex",
  gap: "10px",
  alignItems: "center",
};
