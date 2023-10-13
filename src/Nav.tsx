import "./stylesheets/Nav.css";
import { Link, Outlet } from "react-router-dom";

function Nav() {
  return (
    <>
      <header>
        <div className="name-and-pic">
          <div className="profile-photo">
            <img
              src="../public/zr_profile_cropped.jpg"
              alt="Zachary Romero Profile"
            />
          </div>
          <div className="name">
            <h1>Zachary Romero</h1>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">about</Link>
              {/* <a href="/">about</a> */}
            </li>
            <li>
              <Link to="/projects">projects</Link>
              {/* <a href="projects">projects</a> */}
            </li>
            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Outlet />
    </>
  );
}

export default Nav;
