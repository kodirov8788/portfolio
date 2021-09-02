import React,{useState} from "react";
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
          Well, These projects are not good as you thought, but I believe that
          one day I can create Lovely websites with JavaScript libraries because
          I am trying and learing every day, every hour and every minut.
        </p>
        <p>
          Also, I like challenges, because without that our life would not be
          colorfull. Additionally difficultness makes me skill up in coding{" "}
        </p>
        <div className="resume__links">
          <h3>Here is my resume</h3>
          <FaArrowAltCircleDown />
          <a
            href="https://drive.google.com/file/d/1eyxhuyjkX5-BLP8kXaGL573vaoDrOM-2/view?usp=sharing"
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
