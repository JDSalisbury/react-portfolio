import "./App.css";

import NavBar from "./components/layout/Nav";
import Hero from "./components/hero/Hero";
import Work from "./components/work/Work";
import { Detail } from "./components/detail/Detail";
import { Footer } from "./components/layout/Footer";
import { Routes, Route } from "react-router-dom";
import { Skills } from "./components/skills/Skills";
import { Contact } from "./components/contact/Contact";
import { Experience } from "./components/experience/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <Work />
      <Skills />
      <Contact />
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Work />
    </>
  );
};

const Project = () => {
  return (
    <>
      <Detail />
      {/* <Work /> */}
    </>
  );
};

const Me = () => {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
    </>
  );
};

const ContactInfo = () => {
  return (
    <>
      <Contact />
    </>
  );
};
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes basename={process.env.PUBLIC_URL}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<Me />} />
        <Route exact path="/contact" element={<ContactInfo />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:project" element={<Project />} />
        <Route path="/projects/tag/:tag" element={<Projects />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
