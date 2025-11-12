import "./Nav.css";
import name from "./name_font.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <div className="header-content">
        <Link to="/">
          <img src={name} className="name-logo" alt="logo" />
        </Link>
        <nav className="menu">
          <ul id="menu-primary-items">
            <li id="menu-item-92">
              <Link to="/">Home</Link>
            </li>
            <li id="menu-item-88">
              <Link to="/projects">Work</Link>
            </li>
            <li id="menu-item-93">
              <Link to="/about">About</Link>
            </li>
            <li id="menu-item-91">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
