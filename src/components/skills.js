import React from "react";
import bootstrap from "../assets/bootstrap.png";
import sql from "../assets/database.png";
import html from "../assets/html.png";
import css from "../assets/css-3.png";
import js from "../assets/java-script.png";
import nest from "../assets/nest.png";
import mongo from "../assets/mongo.png";
import react from "../assets/react.png";
import python from '../assets/python.png';
import ts from '../assets/ts.png'

function Skills() {
  return (
   <div className="skillswrap" id="skills">
   <div className="skill">Technical <span style={{color:"#f39c12"}}> Skills</span></div>
    <div className="skills-container">
      <div className="skill-card">
        <img src={html} alt="HTML" className="html" />
        <span>Html</span>
      </div>
      <div className="skill-card">
        <img src={css} alt="CSS" className="css" />
        <span>Css</span>
      </div>
      <div className="skill-card">
        <img src={js} alt="JavaScript" className="js" />
        <span>Javascript</span>
      </div>
      <div className="skill-card">
        <img src={bootstrap} alt="Bootstrap" className="bootstrap" />
        <span>Bootstrap</span>
      </div>
      <div className="skill-card">
        <img src={react} alt="React" className="react" />
        <span>ReactJs</span>
      </div>
      <div className="skill-card">
        <img src={nest} alt="NestJS" className="nest" />
        <span>NestJs</span>
      </div>
      <div className="skill-card">
        <img src={sql} alt="SQL" className="sql" />
        <span>Sql</span>
      </div>
      <div className="skill-card">
        <img src={mongo} alt="MongoDB" className="mongo" />
        <span>MongoDb</span>
      </div>
      <div className="skill-card">
        <img src={python} alt="python" className="python" />
        <span>Python</span>
      </div>
      <div className="skill-card">
        <img src={ts} alt="typescript" className="typescript" />
        <span>Typescript</span>
      </div>
    </div>
   </div>
  );
}

export default Skills;
