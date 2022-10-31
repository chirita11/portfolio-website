import React from "react";
import image from "../images/image-hero.png";
import "../header/Header.css";
import resume from "../resume/cv.docx";

const Header = () => {
  return (
    <>
      <div className="header container-fluid">
        <div className="header-text">
          <h6 className="hello">Hello World, I'm</h6>
          <h1>Chinwendu</h1>
          <h4>Developer and Freelancer</h4>
          <div className="links">
            <a href="#">
              <i class="bi bi-envelope"></i>
            </a>
            <a href="#">
              <i class="bi bi-twitter"></i>
            </a>
            <a href="#">
              <i class="bi bi-linkedin"></i>
            </a>
            <a href="#">
              <i class="bi bi-github"></i>
            </a>
          </div>
          <div className="button">
            <a href={resume}>
              <button>Download CV</button>
            </a>
          </div>
        </div>
        <div className="header-image">
          <img
            src={image}
            className="header-image rounded"
            width={400}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
