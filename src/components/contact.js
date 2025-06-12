import { Button } from "./link";

export const Contact = () => {
  return (
    <>
      <Button
        iconUrl={
          "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-social-github-512.png"
        }
        title={"Github"}
        children={
          <a
            href="https://github.com/nemnem202"
            style={text}
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        }
        index={"Gihub"}
      ></Button>
      <Button
        iconUrl={
          "https://cdn3.iconfinder.com/data/icons/picons-social/57/11-linkedin-512.png"
        }
        title={"Linked-In"}
        children={
          <a
            style={text}
            href="https://www.linkedin.com/in/na%C3%AFm-el-habbas-35a31832a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked-In
          </a>
        }
        index={"Linkedin"}
      ></Button>
      <Button
        iconUrl={
          "https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-gmail-512.png"
        }
        title={"Mail"}
        children={
          <a
            href="mailto:your@email.com"
            style={text}
            target="_blank"
            rel="noopener noreferrer"
          >
            E-Mail
          </a>
        }
        index={"Mail"}
      ></Button>
      <Button
        iconUrl={
          "https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_call_48px-512.png"
        }
        title={"Phone"}
        children={
          <a href="tel:+33761161586" style={text}>
            Phone-Call
          </a>
        }
        index={"Phone"}
      ></Button>
    </>
  );
};

const text = {
  position: "absolute",
  background: "none",
  textDecoration: "none",
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
