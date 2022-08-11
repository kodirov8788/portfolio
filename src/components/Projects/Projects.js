import React, { useState } from "react";
import { CgEnter } from "react-icons/cg";
import { FaArrowAltCircleDown } from "react-icons/fa";
import "./Projects.css";

function Projects() {
  const cardInfo = [
    {
      image: "https://i.ibb.co/Tqg8762/whats-app.jpg",
      route: "https://whatsapp-clone-ten-cyan.vercel.app/",
    },
    {
      image: "https://i.ibb.co/h2Pvyx8/APPLE-CALCULATOR.jpg",
      route: "https://apple-calculator-clone.netlify.app/",
    },
    {
      image: "https://i.ibb.co/fpMh463/BOOKLIST.jpg",
      route: "https://booklistjavascript.netlify.app",
    },
    {
      image: "https://i.ibb.co/cxtW6r4/DARK-LIGHT-MODE.jpg",
      route: "https://darkmode-lightmode.netlify.app",
    },
    {
      image: "https://i.ibb.co/d2KL6G9/FUNCTIONAL-TABLE.jpg",
      route: "https://functionaltable.netlify.app",
    },
    {
      image: "https://i.ibb.co/1Zhnx3X/HOME-CLOCK.jpg",
      route: "https://home-clock.netlify.app",
    },
    {
      image: "https://i.ibb.co/zP29By1/SALARY-APPLICATION.jpg",
      route: "https://salaryapplication.netlify.app",
    },
    {
      image: "https://i.ibb.co/PzxTB5g/SIMPLE-CALCULATOR.jpg",
      route: "https://ordinary-calculator.netlify.app",
    },
    {
      image: "https://i.ibb.co/QHw6xqv/TODO-LIST.jpg",
      route: "https://making-todolist-js.netlify.app",
    },
    {
      image: "https://i.ibb.co/QM8bRZx/WEATHER-APPLICATION.jpg",
      route: "https://weatherforecastjs.netlify.app",
    },
    {
      image: "https://i.ibb.co/742Z7nW/WEIGHT-CONVERTER.jpg",
      route: "https://simpleconverterofweight.netlify.app",
    },
    {
      image: "https://i.ibb.co/yhgnphj/YOUTUBE-CLONE.jpg",
      route: "https://youtube-clone-css-js.netlify.app",
    },
    {
      image: "https://i.ibb.co/jr77kX9/SIDEBAR.jpg",
      route: "https://awesome-wiles-637f17.netlify.app",
    },
    {
      image: "https://i.ibb.co/s6WHL9k/Screen-Shot-2021-11-16-at-10-56-35.png",
      route: "https://dunyoshop.uz/",
    },
    {
      image: "https://i.ibb.co/CvJ1jRZ/Screen-Shot-2021-11-16-at-10-58-04.png",
      route: "https://algoritm-edu.vercel.app/",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div key={index} className="project__card">
        <img alt="" variant="top" className="card__image" src={card.image} />
        <div className="project__IconsContainer">
          <div className="project__techIcons">
            <h5>Enter This Webpage</h5>
            <a href={card.route} target="_blank" rel="noreferrer">
              <CgEnter />
            </a>
          </div>
        </div>
      </div>
    );
  };

  const [projectCard, setProjectCard] = useState(true);

  function scrollHandler() {
    if (window.scrollY <= 70) {
      setProjectCard(true);
    } else {
      setProjectCard(false);
    }
  }
  window.addEventListener("scroll", scrollHandler);

  return (
    <div className="project__section">
      <div className={projectCard ? "project__text" : "project__text Scroll"}>
        <h2 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h2>
        <p>Here are a few projects I've worked on recently.</p>
        <p>
          I have nearly 2 years of experience with React.js. I believe in the
          strong dedication in each project of my clients. Besides, I can help
          you with: <br /> 1. HTML5 and Css <br /> 2. Vanilla JavaScript
          projects <br /> 3. React JS and Next.js projects <br /> 4.Tailwinds
          and bootstrap <br /> 5.Node.js and MongoDB database || firebase
        </p>

        <div className="resume__links">
          <h3>Here is my resume</h3>
          <FaArrowAltCircleDown />
          <a
            href="https://drive.google.com/file/d/1F5faGGbXsP6QCA7VtEPseVBFqFH9P5u3/view?usp=sharing"
            className="resume__btn"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="project__cardSection">{cardInfo.map(renderCard)}</div>
    </div>
  );
}

export default Projects;
