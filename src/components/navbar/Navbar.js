import React from "react";
import image from "../images/image-hero.png";
import resume from "../resume/cv.docx";
import "../navbar/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand  text-white nav-title" href="#">
            Rit<span>a</span>
          </a>
          <div className="mobileimg">
            <img src={image} alt="" />
          </div>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end me-5"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link text-white mt-2" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link text-white mt-2 ms-4" href="#">
                Portfolio
              </a>
              <a class="nav-link text-white mt-2 ms-4" href="#">
                Resume
              </a>
              <a href={resume} target="_blank">
                <button class="nav-link btn btn-outline text-white ms-4 px-4 m-sm-2">
                  Download CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
