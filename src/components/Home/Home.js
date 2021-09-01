
import React from "react";
import { Container, Col } from "react-bootstrap";
// import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Carousel from "../Slider";
import "./Home.css";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home__section">
        <Particle />
        <Container className="home__content">
          <div className="home__header">
            <Col md={7}>
              <h1 className="heading">
                Hi There! <br />
                <br />
                Welcome,
                <strong className="main__name"> My Portfolio </strong>
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="heading__name">
                I'm
                <strong className="main__name"> Kodirov Mukhammadali</strong>
              </h1>
              <div>
                <Type />
              </div>
              <a
                href="https://t.me/japanwork"
                target="_blank"
                className="home__mainBtn"
                rel="noreferrer"
              >
                Contact Me By Telegram
              </a>
            </Col>
            <div className="home__carousel">
              <Carousel/>
              <br />
              <h2>Watch My Projects</h2>
            </div>
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
