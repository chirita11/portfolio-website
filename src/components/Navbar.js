import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-info p-4">
        <div class="container-fluid">
          <a class="navbar-brand ms-5 text-white" href="#">
            Rita
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse justify-content-end me-5"
            id="navbarNavAltMarkup"
          >
            <div class="navbar-nav">
              <a class="nav-link text-white mt-2" aria-current="page" href="#">
                Home
              </a>
              <a class="nav-link text-white mt-2" href="#">
                Portfolio
              </a>
              <a class="nav-link text-white mt-2" href="#">
                Resume
              </a>
              <a class="nav-link btn btn-outline-light text-white py-3 px-5 mx-5">
                Download CV
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
