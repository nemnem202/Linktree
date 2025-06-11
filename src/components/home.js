import FirstTextAnimation from "./first_text_animation";

export const Home = () => {
  const techs = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    fontSize: "1rem",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "#8df0cc",
    marginTop: "10%",
    // marginBottom: "40%",
    gap: "1rem",
  };
  const tech = {
    borderRadius: "0.5rem",
    padding: "0.2rem 0.5rem",
    border: "2px solid #8df0cc",
    // marginLeft: "0.5rem",
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "rgba(0, 0, 0, 0.5) 0px 3px 8px",
  };

  const img = {
    borderRadius: "50%",
    objectFit: "cover",
    width: "200px",
    height: "200px",
    aspectRatio: "1 / 1",
    boxShadow: "rgba(0, 0, 0, 0.7) 0px 3px 12px",
  };

  const imgContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    marginBottom: "5%",
  };

  return (
    <>
      <div style={imgContainer}>
        <img src="/moi.webp" alt="Profile" style={img} />
      </div>

      <FirstTextAnimation text={"Naïm El Habbas"} size={2.5} />
      <FirstTextAnimation
        text={"Fullstack developper"}
        size={1.8}
        delay={0.5}
      />
      <div className="techs" style={techs}>
        {["Next.js", "Angular", "Node.js", "Nest.js"].map((t) => (
          <div className="tech" style={tech} key={t}>
            {t}
          </div>
        ))}
      </div>
    </>
  );
};
