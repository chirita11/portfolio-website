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
          <p>
            a web developer and an entreprenuer, passionate about creating
            beautiful.
          </p>

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
