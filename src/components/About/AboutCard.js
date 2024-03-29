import React from "react";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="quoteCard__view">
      <blockquote className="blockquote mb-100">
        <p style={{ textAlign: "justify" }}>
          Hi Everyone, I am{" "}
          <span className="purple">Kodirov Mukhammadali </span>
          from <span className="purple"> Namangan, UZBEKISTAN</span>
          <br />I am a1 Web Developer
          <br />
          <br />
          Apart from coding, some other activities that I love to do!
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Reading Books
          </li>
          <li className="about-activity">
            <ImPointRight /> Learning other tools
          </li>
          <li className="about-activity">
            <ImPointRight /> Travelling
          </li>
        </ul>

        <p>"Strive to build things that make a difference!" </p>
      </blockquote>
    </div>
  );
}

export default AboutCard;
