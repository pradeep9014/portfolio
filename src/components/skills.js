import React from "react";
import bootstrap from "../assets/bootstrap.png";
import sql from "../assets/database.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/java-script.png";
import nest from "../assets/nest.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import ts from "../assets/ts.png";

function Skills() {
  const skills = [
    { id: 1, name: "Html", image: html, class: "html" },
    { id: 2, name: "Css", image: css, class: "css" },
    { id: 3, name: "Javascript", image: js, class: "js" },
    { id: 4, name: "Bootstrap", image: bootstrap, class: "bootstrap" },
    { id: 5, name: "NestJs", image: nest, class: "nest" },
    { id: 6, name: "ReactJs", image: react, class: "react" },
    { id: 7, name: "MongoDb", image: mongo, class: "mongo" },
    { id: 8, name: "Python", image: python, class: "python" },
    { id: 9, name: "Typescript", image: ts, class: "typescript" },
    { id: 10, name: "Sql", image: sql, class: "sql" },
  ];
  return (
    <div className="skillswrap" id="skills">
      <div className="skill">
        Technical <span style={{ color: "#f39c12" }}> Skills</span>
      </div>
      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-card">
            <img src={skill.image} alt={skill.name} className={skill.class} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
