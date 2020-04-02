import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
    <div>
        <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink
                to="/home"
                className="nav-link"
              >
                Home
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                to="/links"
                className="nav-link"
              >
                Links
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink
                to="/portfolio"
                className="nav-link"
              >
                Portfolio
              </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;