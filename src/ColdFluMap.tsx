import "./stylesheets/ColdFluMap.css";

function ColdFluMap() {
  return (
    <>
      <div className="proj cold">
        <div className="proj-title cold">
          <h1>Cold and Flu Map Hotspots</h1>
        </div>
        <div className="proj-img cold">
          <a
            href="https://info172.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src="../public/info172.png" alt="Cold Flu Map Image" />
          </a>
        </div>

        <div className="proj-desc cold">stuff about map</div>
      </div>
    </>
  );
}

export default ColdFluMap;
