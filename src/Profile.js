import React from "react";
import hero from "./components/images/image-hero.png";

const Profile = () => {
  return (
    <>
      <div className="sideprofile">
        <div className="profile">
          <img src={hero} alt="" />
          <div className="text">
            <h3>Chiaha C. Rita</h3>
            <p> Web Developer | Entreprenuer</p>
            <div className="links">
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
            <div id="text">
              <p>
                a web developer, I passionate about creating beautiful,
                <br /> functional and responsive websites. I have worked with
                incredibly <br /> talented people across different platforms.{" "}
              </p>
            </div>
            <div className="copyright">
              <p>©2022 Chiaha Rita.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
