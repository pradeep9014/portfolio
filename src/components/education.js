import React from "react";
import "../styles.css";
import sscImage from "../assets/school.png"; 
import intermediateImage from "../assets/college.png";
import btechImage from "../assets/education.png"; 

function Education() {
  const educationDetails = [
    {
      course: "Secondary School",
      school: "Narayan E-Techno School",
      year: "2017-18",
      image: sscImage, 
    },
    {
      course: "Intermediate",
      school: "Narayan Junior College",
      year: "2018-20",
      image: intermediateImage, 
    },
    {
      course: "B.Tech(Cse)",
      school: "Raghu Institute of Technology",
      year: "2020-24",
      image: btechImage, 
    },
  ];

  return (
    <div className="education-wrap" id="education">
      <div className="education-title">Education</div>
      <div className="education-container">
        {educationDetails.map((education, index) => (
          <div className="education-card" key={index}>
            <div className="education-image">
              <img src={education.image} alt={education.course} />
            </div>
            <div className="education-text">
              <h3>{education.course}</h3>
              <p>{education.school}</p>
              <span>{education.year}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
