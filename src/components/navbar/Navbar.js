import React from "react";
import image from "../images/image-hero.png";
import resume from "../resume/cv.docx";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand text-white nav-title ms-5" href="#">
            Rit<span>a</span>
          </a>

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
                <a
                  class="nav-link active nav-link text-white mt-2 ms-2"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link text-white mt-2 ms-2" href="#">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link text-white mt-2 ms-2" href="#">
                  Resume
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-link text-white mt-2 ms-2">Portfolio</a>
              </li>
              <li>
                <a href={resume} target="_blank">
                  <button class="nav-link btn btn-outline text-white">
                    Download CV
                  </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
