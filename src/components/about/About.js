import React from "react";
import image from "../images/image-hero.png";
import "../about/About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div class="content-about"></div>
        <h2>Who is Rita?</h2>
        <div class="about-container">
          <div class="about-container-left">
            <img src={image} alt="your name, headshot" />
          </div>
          <div className="name text-center container">
            <h5>Web Developer | Entreprenuer</h5>
            <div className="links-about">
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
          </div>
          <div class="about-container-right">
            <div className="about-text">
              <h1>
                She is a web developer and an entreprenuer, passionate about
                creating beautiful, functional and responsive websites. She
                strives to build immersive and beautiful web applications
                through carefully crafted code and user-centric design. I have
                worked with incredibly talented people across different
                platforms.
              </h1>
              <h3>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                beatae eaque commodi minima qui iste harum, laborum autem
                corporis obcaecati delectus assumenda deserunt esse ex provident
                ipsam enim. Corrupti, praesentium?
              </h3>

              <h3>
                Auam illo porro cupiditate repellendus explicabo ducimus esse.
                Dupiditate repellendus explicabo sunt natus voluptate fugit
                ducimus esse
              </h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
