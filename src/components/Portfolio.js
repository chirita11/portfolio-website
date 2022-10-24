import React from "react";
import image from "./images/image-hero.png";
import project from "./images/meet-project.png";
import project2 from "./images/meet-project.png";

const Portfolio = () => {
  return (
    <>
      <div>
        <img
          src={image}
          className="portfolio-image rounded"
          width={200}
          alt=""
        />
      </div>
      <div class="">
        <h2>Chiaha Rita C.</h2>
        <br />
        <h4>Web Developer | Entreprenuer</h4>
        <div>
          <a href="https://github.com/chirita11">
            <i class="bi bi-github text-decoration-none me-3 text-dark"></i>
          </a>
          <a href="https://twitter.com/youngritty2">
            <i class="bi bi-twitter text-decoration-none me-3 text-dark"></i>
          </a>
          <a href="https://mail.google.com/chiaha.rita">
            <i class="bi bi-envelope text-decoration-none me-3 text-dark"></i>
          </a>
          <a href="https://www.instagram.com/rita_chiaha/">
            <i class="bi bi-instagram text-decoration-none me-3 text-dark"></i>
          </a>
          <a href="https://www.linkedin.com/in/chiaha-rita-088126254/">
            <i class="bi bi-linkedin text-decoration-none me-3 text-dark"></i>
          </a>
        </div>

        <p className="portfolio-text">
          a web developer, I passionate about creating beautiful,
          <br /> functional and responsive websites. I have worked with
          incredibly <br /> talented people across different platforms.
        </p>
      </div>
      <div className="portfolio-card">
        <div class="card">
          <img src={project} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> Chatting App</h5>
            <p class="card-text">Meet Project.</p>
          </div>
        </div>
      </div>
      <div className="portfolio-card">
        <div class="card">
          <img src={project} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title"> Chatting App</h5>
            <p class="card-text">Meet Project.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
