import React from "react";
import { Card } from "react-bootstrap";
// import ProjectCard from "react-bootstrap/Card";
import "./Projects.css";

function Projects() {
  const cardInfo = [
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
    {
      image: "https://i.ytimg.com/vi/8QBYrKhqgFI/maxresdefault.jpg",
      title: "Todolist",
      text: "Starting React by Doing Todo list as usual",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div
        style={{
          justifyContent: "center",
          display: "grid",
          paddingBottom: "10px",
        }}
        key={card.index}
        className="project-card"
      >
        <img alt="" variant="top" className="card__image" src={card.image} />

        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </div>
    );
  };
  return (
    <div fluid className="project-section">
      <div className="project__text">
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      </div>
      <div className="porject__cardSection">{cardInfo.map(renderCard)}</div>
    </div>
  );
}

export default Projects;
