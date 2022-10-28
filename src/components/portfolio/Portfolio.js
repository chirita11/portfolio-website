import React from "react";
import room from "../images/room-project.png";
import meet from "../images/meet-project.png";
import nasims from "../images/nasims-photo.png";
import countdown from "../images/countdown-project.png";
import game from "../images/game.png";

import "../portfolio/Portfolio.css";

const Portfolio = () => {
  return (
    <>
      <div className="data">
        <div className="portfolio-card">
          <div class="card shadow  bg-white rounded">
            <img src={meet} class="card-img-top" alt="meet" />
            <div class="card-body">
              <h3 class="card-text">Meet Project.</h3>
              <h6 class="card-title fst-italic"> Chatting App</h6>
              <p>HTML, CSS,JAVASCRIPT, REACT JS</p>
              <a
                className="text-warning"
                href="https://rita-meet-project.vercel.app/"
                target="_blank"
              >
                View Website
              </a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={room} class="card-img-top" alt="room" />
            <div class="card-body">
              <h3 class="card-text">Room Project.</h3>{" "}
              <h6 class="card-title fst-italic"> Furniture App</h6>
              <p>HTML, CSS,JAVASCRIPT</p>
              <a
                className="text-warning"
                href="https://room-homepage-ruddy-three.vercel.app/"
              >
                View Website
              </a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={room} class="card-img-top" alt="room" />
            <div class="card-body">
              <h3 class="card-text">Portfolio Project.</h3>
              <h6 class="card-title fst-italic">portfolio App</h6>
              <p>HTML, CSS, BOOTSTRAP, JAVASCRIPT, REACT</p>
              <a className="text-warning" href="">
                View Website
              </a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={countdown} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h3 class="card-text">Timer Project.</h3>
              <h6 class="card-title fst-italic"> Launching App</h6>
              <p>HTML, CSS,JAVASCRIPT</p>
              <a className="text-warning" href="">
                View Website
              </a>
            </div>
          </div>

          <div class="card shadow  bg-white rounded">
            <img src={nasims} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h3 class="card-title fst-italic">N-power Clone App</h3>
              <h6 class="card-text">Investment app</h6>
              <p>HTML, CSS, BOOTSTRAP</p>
              <a
                className="text-warning"
                href="https://nasims-project.vercel.app/"
              >
                View Website
              </a>
            </div>
          </div>
          <div class="card shadow  bg-white rounded">
            <img src={game} class="card-img-top" alt="countdown" />
            <div class="card-body">
              <h3 class="card-title fst-italic">Gaming App</h3>
              <h6 class="card-text">Guess the number game Project.</h6>
              <p>HTML, CSS, JAVASCRIPT</p>
              <a className="text-warning" href="">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
