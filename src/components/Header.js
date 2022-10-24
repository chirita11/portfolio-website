import React from "react";
import image from "./images/image-hero.png";

const Header = () => {
  return (
    <>
      <div className="header d-flex flex-row bd-highlight mb-3 mt-5 container">
        <div class="header-image">
          <img
            src={image}
            className="header-image rounded"
            width={400}
            alt=""
          />
        </div>

        <div class="header-text">
          <h6>Hello World, I'm</h6>
          <h1>Rita</h1>
          <p>
            a web developer, I passionate about creating beautiful, functional
            and responsive websites. I have worked with incredibly talented
            people across different platforms.
          </p>

          <div class="button">
            <button class="btn btn-">View Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
