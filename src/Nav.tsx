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

      <Outlet />
    </>
  );
}

export default Nav;
