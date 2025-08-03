import React from "react";
import avatar from "../assets/avatar.jpeg";
import "../styles/about.css"

function About() {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <div style={{ color: "white" }}>
          About<span style={{ color: "#f39c12" }}> Me</span>
        </div>
        <div className="image-container">
          <img src={avatar} alt="Join" className="about-image" />
        </div>
        <div style={{ color: "#f39c12" }}>Full Stack Developer</div>
      </div>
      <div className="about-content">
        <p>
          Hello! I'm Pradeep, a passionate and dedicated Full Stack Developer
          with a background in Computer Science Engineering. Over the years, I
          have honed my skills in developing dynamic, responsive, and
          user-friendly web applications, making use of both front-end and
          back-end technologies.
        </p>

        <p>
          My expertise spans a wide range of tools and frameworks, including
          HTML, CSS, JavaScript, React, NestJS, SQL, MongoDB, and Bootstrap.
          Currently, I work as a Full Stack Developer in a product-based
          company, where I contribute to end-to-end software development. My
          experience has allowed me to work in agile teams and deliver robust
          solutions that meet business needs and enhance user experiences.
        </p>

        <p>
          I am constantly looking for ways to grow my skills and stay updated
          with the latest technologies to create innovative and effective
          digital solutions. Let's connect and build something great together.
        </p>
      </div>
    </div>
  );
}

export default About;
