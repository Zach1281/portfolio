import "./stylesheets/AboutMe.css";
import { Link } from "react-router-dom";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <div className="title">
          <h1>Hello, I'm Zachary Romero</h1>
        </div>
        <div className="desc">
          <p>
            <span className="big">SOFTWARE DEVELOPER</span> pursuing a career in
            backend development.
          </p>
          <p>
            Here are some projects I have worked on and am currently working on.
          </p>
        </div>
        <div className="project-button">
          <Link to="/projects">
            <button>Projects</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
