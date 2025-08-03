// src/components/Education.jsx
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
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            <div className="timeline-content">
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
