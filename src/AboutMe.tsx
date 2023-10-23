import Nav from "./Nav";
import About from "./About";
import Skills from "./Skills";
import "./stylesheets/AboutMe.css";

function AboutMe() {
  return (
    <>
      <Nav />
      <main>
        <div className="about-container">
          <About />
          <Skills />
        </div>
      </main>
    </>
  );
}

export default AboutMe;
