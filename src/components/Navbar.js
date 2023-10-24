import React from "react";
import Bootstrap from "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light shadow-sm " id="main-navbar">
        <div className="container">
          Jash Sharma
          <div className="collapse navbar-collapse justify-content-center">
            <ul className="navbar-nav mb-lg-0">
              <li className="nav-item active me-5">
                <Link className="item" to="home">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="item" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="item" to="projects">
                  Projects
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link className="item" to="contact">
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
