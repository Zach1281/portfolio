import "./stylesheets/About.css";

function About() {
  return (
    <>
      {" "}
      <div className="card">
        <div className="about-title">
          <h1>About Me</h1>
        </div>
        <div className="about-desc">
          <p>
            I graduated from the{" "}
            <span className="card-highlight">
              University of California - Irvine
            </span>{" "}
            with a degree in <span className="card-highlight">Informatics</span>
            . My initial interest in programming started when I took an
            introductory course when I was attending my local community college.
            Since then, I have dabbled in multiple languages, developing small
            projects along the way. I enjoy working{" "}
            <span className="card-highlight">collaboratively</span> and despite
            the challenges it brings, I find it to be the best setting to learn
            and grow myself as a professional. My professional programming
            journey has only just begun and I look{" "}
            <span className="card-highlight">forward</span> to the challenges
            that await.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
