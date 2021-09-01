import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiLinux, SiVisualstudiocode, SiGithub } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub className="github-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux className="linux-icon" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode className="visual-icon" />
      </Col>
    </Row>
  );
}

export default Toolstack;
