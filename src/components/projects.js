import { Link } from "./link";
import works from "../works.json";

export const Projects = () => {
  return (
    <>
      {works.map((work, idx) => (
        <Link
          key={idx}
          work={work}
          index={idx}
          children={<div style={text}>{work.title}</div>}
        />
      ))}
    </>
  );
};

const text = {
  position: "absolute",
  color: "#8df0cc",
  left: "50px",
  paddingLeft: "20px",
  width: "calc(100% - 20px - 52px)",
  height: "100%",
  border: "2px solid #8df0cc",
  outline: "2px solid #8df0cc",
  outlineOffset: "-2px",
  borderRadius: "0.5rem",
};
