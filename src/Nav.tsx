import "./stylesheets/Nav.css";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import Hamburger from "./Hamburger";

function Nav() {
  // const [hambugerOpen, setHamburgerOpen] = useState(false);
  return (
    <>
      <header>
        <div className="name-and-pic">
          <div className="profile-photo">
            <img src="../zr_profile_cropped.jpg" alt="Zachary Romero Profile" />
          </div>
          <div className="name">
            <h1>Zachary Romero</h1>
          </div>
        </div>
        <nav>
          {/* <Hamburger /> */}
          <ul className="navigation">
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;
