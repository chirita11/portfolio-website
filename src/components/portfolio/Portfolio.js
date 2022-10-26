import React from "react";
import image from "../images/image-hero.png";
import room from "../images/room-project.png";
import meet from "../images/meet-project.png";
import nasims from "../images/nasims-photo.png";
import countdown from "../images/countdown-project.png";
import game from "../images/game.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import mail from "../images/envelope.svg";
import "../portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="data">
        <div className="data-content">
          <img src={image} alt="face" />
          <h2>Chiaha Rita C.</h2>
          <h4>Web Developer | Entreprenuer</h4>
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
          <p className="portfolio-text">
            a web developer, I passionate about creating beautiful, functional
            and responsive websites. I have worked with incredibly talented
            people across different platforms.
          </p>
        </div>
        <div className="portfolio-card">
          <div class="card shadow  bg-white rounded">
            <img src={meet} class="card-img-top" alt="meet" />
            <div class="card-body">
              <h5 class="card-title"> Chatting App</h5>
              <p class="card-text">Meet Project.</p>
              <a href="">View Web</a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={room} class="card-img-top" alt="room" />
            <div class="card-body">
              <h5 class="card-title"> Furniture App</h5>
              <p class="card-text">Room Project.</p>
              <a href="">View Web</a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={room} class="card-img-top" alt="room" />
            <div class="card-body">
              <h5 class="card-title">Business App</h5>
              <p class="card-text">Nasims Project.</p>
              <a href="">View Web</a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={countdown} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h5 class="card-title"> Launching App</h5>
              <p class="card-text">Timer Project.</p>
              <a href="">View Web</a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={nasims} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h5 class="card-title">N-power Clone App</h5>
              <p class="card-text">Bootstrap Project.</p>
              <a href="">View Web</a>
            </div>
          </div>
          <div class="card shadow  bg-white rounded">
            <img src={game} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h5 class="card-title">Gaming App</h5>
              <p class="card-text">Guess the number game Project.</p>
              <a href="">View Web</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
