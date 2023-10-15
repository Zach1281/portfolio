import "./stylesheets/Healthsocal.css";

function Healthsocal() {
  return (
    <>
      <div className="proj health">
        <div className="proj-title health">
          <h1>Healthsocal</h1>
        </div>
        <div className="proj-img health">
          <a
            href="https://healthsocal-ai-three.vercel.app/map"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src="../public/healthsocal.png"
              alt="Healthsocal Project Image"
            />
          </a>
        </div>
        <div className="proj-desc health">stuff about healthsocal</div>
      </div>
    </>
  );
}

export default Healthsocal;
