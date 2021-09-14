import React from "react";
import { Container, Col } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <div className="footer__conatiner">
        <Col md="4" className="footer-copywright">
          <h3>Designed and Developed by Kodirov</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>CopyRight © {year}</h3>
        </Col>
        <Col  className="footer-body">
          {
            <ul className="footer-icons">
              <li>
                <a
                  href="https://github.com/kodirov8788"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/japanwork"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mukhammadali-kodirov-874b48214/"
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          }
        </Col>
      </div>
    </Container>
  );
}

export default Footer;
