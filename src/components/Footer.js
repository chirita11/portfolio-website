import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <footer class=" d-flex flex-row bg-light p-4">
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 col-md-2 item">
                <ul>
                  <li className="text-decoration-none text-dark">
                    <a className="text-decoration-none text-dark" href="#">
                      Email
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none text-dark" href="#">
                      chiaharita0@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
              <div>|</div>
              <div class="col-sm-6 col-md-2 item">
                <ul>
                  <li>
                    <a className="text-decoration-none text-dark" href="#">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none text-dark" href="#">
                      +234-8155100583
                    </a>
                  </li>
                </ul>
              </div>
              <div>|</div>
              <div class="col-sm-6 col-md-2 item">
                <ul>
                  <li>
                    <a className="text-decoration-none text-dark" href="#">
                      Location
                    </a>
                  </li>
                  <li>
                    <a className="text-decoration-none text-dark" href="#">
                      Lagos, Nigeria
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
