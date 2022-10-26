import React from "react";
import image from "../images/image-hero.png";
import twitter from "../images/twitter.svg";
import linkedin from "../images/linkedin.svg";
import github from "../images/github.svg";
import mail from "../images/envelope.svg";
import "../resume/Resume.css";

const Resume = () => {
  return (
    <>
      <div className="resume">
        <div className="bio-data">
          <img src={image} alt="face" />
          <h2>Chinwendu Rita C.</h2>
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
          <p>
            a web developer, I passionate about creating beautiful, functional
            and responsive websites. I have worked with incredibly talented
            people across different platforms.
          </p>
        </div>
        <div className="cv">
          <div className="text">
            <div className="title">
              <h1>Chiaha Rita Chinwendu</h1>
              <h5>Web developer | Entreprenuer</h5>
            </div>
            <div className="description">
              <h3>chiaharita0@gmail.com</h3>
              <p>08155100583</p>
            </div>
          </div>
          <div className="text">
            <div className="title">
              <h4>EDUCATION & TRAINING - </h4>
            </div>
            <div className="description">
              <h5>Tech Accent Creatives</h5>
              <p>
                lagos, Nigeria <br /> Full stack web development
              </p>

              <h5>Madonna University</h5>
              <p>
                Elele, Port-Harcourt <br /> Msc Nutritional Biochemistry, 2021-
                Till date
              </p>

              <h5>Caritas University</h5>
              <p>
                Enugu <br /> Bsc. Biochemistry, 2018
              </p>
            </div>
          </div>
          <div className="text">
            <div className="title">
              <h4>EXPERIENCE - </h4>
            </div>
            <div className="description">
              <div className="work">
                <h5> Web developer</h5>
                <h6>Tech Accent Creatives</h6>
              </div>

              <p>June - till date</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusantium ut illum impedit omnis culpa aliquid deserunt
                dolorem fugiat porro voluptate explicabo repudiandae, ex,
                tenetur minima vero voluptates.
              </p>

              <div className="work">
                <h5>Data Collector </h5>
                <h6>World Bank Projects</h6>
              </div>

              <p>March 2021 - April 2021</p>
              <p>
                Data collection on World Bank and National directorate of
                employment in partnership with Hanovia Limited for the Youth
                employment and social support operation (YESSO) survey, location
                of survey was in Cross River State.
              </p>

              <div className="work">
                <h5>Executive Secretary</h5>
                <h6>Raxon Culler Gold</h6>
              </div>

              <p>Aug 2020 - Feb. 2021</p>
              <p>
                Ensuring adherence to service level agreements (SLAs) by 3rd
                party service providers and investigating and resolving all
                escalated issues related to 3rd party services provided. Played
                a major role in implementing administrative and quality
                management systems in the company.
              </p>

              <div className="work">
                <h5>Customer Service Representative</h5>
                <h6>Icegate Limited</h6>
              </div>

              <p>May 2012 - Jan 2014</p>
              <p>
                Maintained a positive, empathetic and professional attitude
                toward customers at all times, Kept records of customer
                interactions, transactions, comments and complaints,Provided
                feedback on the efficiency of the customer service process.
              </p>

              <div className="work">
                <h5>Internal Auditor</h5>
                <h6>Aaron's Place</h6>
              </div>

              <p>May 2021 - Sept. 2021</p>
              <p>
                Evaluate internal control and make recommendation on how to
                improve. Monitoring the company’s CCTV Investigating fraudulent
                acts Communicate the findings and recommendations
              </p>
            </div>
            <br />
            <br />
          </div>
          <div className="text">
            <div className="title">
              <h4>SKILL - </h4>
            </div>
            <div className="description">
              <div className="work">
                <p>HTML</p>
                <p>CSS</p>
                <p>Javascript</p>
                <p>React JS</p>
              </div>
              <div className="work">
                <p>MongoDB</p>
                <p>Redux </p>
                <p>Angular JS</p>
                <p>Bootstrap</p>
              </div>
              <div className="work">
                <p>Ms Word</p>
                <p>Ms Excel</p>
                <p>Ms Access</p>
                <p>Ms Powerpoint</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
