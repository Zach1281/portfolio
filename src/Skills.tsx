import "./stylesheets/Skills.css";

function Skills() {
  return (
    <>
      <div className="card skills">
        <div className="skills-title">
          <h1>Skills</h1>
        </div>
        <div className="skills-list">
          <div className="langs">
            <div className="subtitle">
              <h2>Languages</h2>
            </div>
            <div className="skills">
              <div className="skill">
                <p>Javascript</p>
              </div>
              <div className="skill">
                <p>HTML</p>
              </div>
              <div className="skill">
                <p>CSS</p>
              </div>
              <div className="skill">
                <p>Typescript</p>
              </div>
              <div className="skill">
                <p>C++</p>
              </div>
              <div className="skill">
                <p>Java</p>
              </div>
              <div className="skill">
                <p>Python</p>
              </div>
              <div className="skill">
                <p>SQL</p>
              </div>
            </div>
          </div>
          <div className="technologies">
            <div className="subtitle">
              <h2>Technologies</h2>
            </div>
            <div className="skills">
              <div className="skill">
                <p>Git</p>
              </div>
              <div className="skill">
                <p>VS Code</p>
              </div>
              <div className="skill">
                <p>Figma</p>
              </div>
            </div>
          </div>
          <div className="databases">
            <div className="subtitle">
              <h2>Databases</h2>
            </div>
            <div className="skills">
              <div className="skill">
                <p>MongoDB</p>
              </div>
              <div className="skill">
                <p>PostgreSQL</p>
              </div>
            </div>
          </div>
          <div className="frameworks">
            <div className="subtitle">
              <h2>Frameworks</h2>
            </div>
            <div className="skills">
              <div className="skill">
                <p>Express.js</p>
              </div>
              <div className="skill">
                <p>React.js</p>
              </div>
              <div className="skill">
                <p>Vue.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
