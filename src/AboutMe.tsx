import "./stylesheets/AboutMe.css";

function AboutMe() {
  return (
    <>
      <div className="about-me">
        <div className="title-picture-container">
          <div className="title">
            <h1>Hi I'm Zachary Romero</h1>
            <h2></h2>
          </div>
        </div>
        <div className="desc">
          <p>
            I'm a <span className="big">SOFTWARE DEVELOPER</span> in backend
            development. I enjoy messing aroundwith APIs and developing APIs
            Here are some projects I have worked on and am currently developing.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
