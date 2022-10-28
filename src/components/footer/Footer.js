import React from "react";
import "../footer/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <div>
            <i class="bi bi-envelope"></i>
          </div>
          <h6>Email</h6>
          <p>chiaharita0@gmail.com</p>
        </div>
        <div className="contact">
          <div>
            <i class="bi bi-person-lines-fill"></i>
          </div>
          <h6>Contact</h6>
          <p>+234-8155100583</p>
        </div>
        <div>
          <div>
            <i class="bi bi-person-lines-fill"></i>
          </div>
          <h6>Location</h6>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
