import React from "react";
import {Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light menu">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            {/* <BrowserRouter> */}
              <Link
                to="/home"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/about"
                    ? "nav-link active"
                    : "nav-link"
                }
              >
                Home
              </Link>
            {/* </BrowserRouter> */}
          </li>
          <li className="nav-item">
            {/* <BrowserRouter> */}
              <Link
                to="/links"
                className={window.location.pathname === "/links" ? "nav-link active" : "nav-link"}
              >
                Links
              </Link>
            {/* </BrowserRouter> */}
          </li>
          <li className="nav-item">
            {/* <BrowserRouter> */}
              <Link
                to="/portfolio"
                className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
              </Link>
            {/* </BrowserRouter> */}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
