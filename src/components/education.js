// src/components/Education.jsx
import React from "react";
import { motion } from "framer-motion";
import sscImage from "../assets/school.png";
import intermediateImage from "../assets/college.png";
import btechImage from "../assets/education.png";
import "../styles/education.css";

function Education() {
  const educationDetails = [
    {
      course: "Secondary School",
      school: "Narayan E-Techno School",
      year: "2017-18",
    },
    {
      course: "Intermediate",
      school: "Narayan Junior College",
      year: "2018-20",
    },
    {
      course: "B.Tech (CSE)",
      school: "Raghu Institute of Technology",
      year: "2020-24",
    },
  ];

  return (
    <div className="education-wrap" id="education">
      <div className="education-title">Education</div>
      <div className="timeline-container">
        {educationDetails.map((education, index) => (
          <motion.div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="timeline-content">
              <h3>{education.course}</h3>
              <p>{education.school}</p>
              <span>{education.year}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education;
