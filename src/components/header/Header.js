import React from "react";
import image from "../images/image-hero.png";
import "../header/Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="header text-white container-fluid">
        <div className="header-text">
          <h6 className="hello text-white">Hello World, I'm</h6>
          <h1>Chinwendu</h1>
          <h4>Developer and Freelancer</h4>
          <div className="links text-white">
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
          <div className="button ">
            <Link
              to="/portfolio"
              class="btn btn-outline-white bg-dark px-4 py-3 mt-4"
            >
              View Portfolio
            </Link>
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
