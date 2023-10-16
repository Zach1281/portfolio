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

        <div className="proj-desc cold">
          This project was aimed at providing researchers/doctors the ability to
          understand which areas of the United States may be facing higher rates
          of repiratory diseases. It focused on understanding
          <span className="card-highlight">
            {" "}
            Natural Language Processing
          </span>{" "}
          to analyze tweets and determine if they were sick depending on what
          was said in the tweet.
        </div>
      </div>
    </>
  );
}

export default ColdFluMap;
