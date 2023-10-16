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
        <div className="proj-desc health">
          <p>
            <span className="card-highlight">Healthsocal</span> is a project
            designed to combat the mental health issues in Orange County. This
            is done through providing a{" "}
            <span className="card-highlight">Choropleth Map</span> of the
            county. By comparing the aspect of the Social Determinants of Health
            and the Mental Health Index of each zip code, the project aimed to
            provide a accessible way for someone to understand the struggles
            someone might be facing depending on where they lived.
          </p>
        </div>
      </div>
    </>
  );
}

export default Healthsocal;
