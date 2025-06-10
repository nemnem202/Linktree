import { Contact } from "./components/contact";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { Parallax } from "./components/parallax";
import { Projects } from "./components/projects";

function App() {
  return (
    <>
      <Header />
      <Parallax
        childrens={[
          {
            title: "Home",
            component: <Home />,
          },
          {
            title: "Projects",
            component: <Projects />,
          },
          {
            title: "Contact",
            component: <Contact />,
          },
        ]}
      ></Parallax>
    </>
  );
}

export default App;
