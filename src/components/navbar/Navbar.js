import React from "react";
import image from "../images/image-hero.png";
import resume from "../resume/cv.docx";
import "../navbar/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg ">
        <div class="container-fluid">
          <Link class="navbar-brand text-white nav-title ms-5" href="#">
            Rit<span>a</span>
          </Link>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <ul class="navbar-nav">
              <li class="nav-item">
                <Link
                  class="nav-link active nav-link text-white mt-2 me-3"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link text-white mt-2 me-3"
                  to="/about"
                >
                  About
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link text-white mt-2 me-3"
                  to="/resume"
                >
                  Resume
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link nav-link text-white mt-2 me-3 "
                  to="/portfolio"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to={resume}
                  target="_blank"
                  className="nav-link btn btn-outline download py-3 px-5 mt-2 text-white"
                >
                  Download CV
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
