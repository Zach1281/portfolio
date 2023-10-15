import Healthsocal from "./Healthsocal";
import ColdFluMap from "./ColdFluMap";
import Nav from "./Nav";
import "./stylesheets/Projects.css";

function Projects() {
  return (
    <>
      <Nav />
      <main>
        <div className="proj-container">
          <Healthsocal />
          <ColdFluMap />
        </div>
      </main>
    </>
  );
}

export default Projects;
