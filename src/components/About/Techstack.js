import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
} from "react-icons/di";
import { SiFirebase, SiBootstrap } from "react-icons/si";
import { ImHtmlFive } from "react-icons/im";
 import {FaCss3Alt} from "react-icons/fa";
//  import { FaCss3Alt } from "react-icons/fa";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <ImHtmlFive className="html-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaCss3Alt className="css-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap className="bootstrap-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 className="javascript-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact className="react-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase className="firebase-icon" />
      </Col>
    </Row>
  );
}

export default Techstack;
