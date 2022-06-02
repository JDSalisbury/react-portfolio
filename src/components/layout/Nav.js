import "./Nav.css";
import name from "./name_font.jpg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="header">
      <img src={name} className="name-logo" alt="logo" />
      <div className="menu">
        <ul id="menu-primary-items">
          <li id="menu-item-92">
            <Link to="/">Home</Link>
          </li>
          <li id="menu-item-88">
            <Link to="/projects">Work</Link>
          </li>
          <li id="menu-item-93">
            <a href="/about">About</a>
          </li>
          <li id="menu-item-91">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
