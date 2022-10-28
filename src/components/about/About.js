import React from "react";
import image from "../images/image-hero.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import mail from "../images/envelope.svg";
import "../about/About.css";

const About = () => {
  return (
    <>
      <section id="about">
        <div class="content-about">
          <h2>About Me</h2>
          <div class="about-container">
            <div
              class="about-container-left"
              data-aos="fade-up-left"
              data-aos-duration="1500"
            >
              <img src={image} alt="your name, headshot" />
              <div className="name">
                <h5>Web Developer | Entreprenuer</h5>
                <div className="links">
                  <a href="#">
                    <img src={mail} alt="mail-box" />
                  </a>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                  <a href="#">
                    <img src={linkedin} alt="linkedin" />
                  </a>
                  <a href="#">
                    <img src={github} alt="github" />
                  </a>
                </div>
              </div>
            </div>
            <div
              class="about-container-right"
              data-aos="fade-up-right"
              data-aos-duration="1000"
            >
              <div className="about-text">
                <h1>
                  <span>CHIAHA RITA CHINWENDU</span> is a web developer and an
                  entreprenuer, passionate about creating beautiful, functional
                  and responsive websites. She strives to build immersive and
                  beautiful web applications through carefully crafted code and
                  user-centric design. I have worked with incredibly talented
                  people across different platforms.
                </h1>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero beatae eaque commodi minima qui iste harum, laborum
                  autem corporis obcaecati delectus assumenda deserunt esse ex
                  provident ipsam enim. Corrupti, praesentium?
                </h3>

                <h3>
                  Fugiat ratione laboriosam nostrum atque. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.
                </h3>
                <h3>
                  Auam illo porro cupiditate repellendus explicabo ducimus esse.
                  Dupiditate repellendus explicabo sunt natus voluptate fugit
                  ducimus esse
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
