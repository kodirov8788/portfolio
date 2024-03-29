import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import "./Home2.css";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <div className="home2__container">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with coding and respect other coders
              <br />I am Fluent Javascript and React
              <i>
                <b className="purple"> Css, Javascript and React. </b>
              </i>
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning and Natural Launguage Processing.
                </b>
              </i>
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript and React.js Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Next.js</b>
              </i>
            </p>
          </Col>
          <div className="myAvtar">
            <Tilt>
              <img src={myImg} className="img__fluid" alt="avatar" />
            </Tilt>
          </div>
        </div>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/kodirov8788"
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mukhammadali-kodirov-874b48214/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://t.me/kodirovdev"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
