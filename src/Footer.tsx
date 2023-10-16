import "./stylesheets/Footer.css";

function Footer() {
  return (
    <>
      <footer>
        <div className="zach-container">
          <div className="name">
            <h1>Zachary Romero</h1>
          </div>
          <div className="job-title">
            <p>Software Developer</p>
          </div>
        </div>
        <div className="socials">
          <div className="icons">
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/in/zachary-romero-b96982229/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="../linkedin-square-logo.svg" alt="LinkedIn Logo" />
              </a>
            </div>
            <div className="github">
              <a
                href="https://github.com/Zach1281"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src="../github.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
