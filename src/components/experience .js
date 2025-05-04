// import React from 'react';
// import { Card } from 'primereact/card';
// import { Badge } from 'primereact/badge';
// import '../styles.css';

// const Experiance = () => {
//   const experiences = [
//     {
//       role: "Senior Frontend Developer",
//       company: "Tech Innovations Inc.",
//       duration: "2022 - Present",
//       description: "Led the development of responsive web applications using React and TypeScript. Improved site performance by 40% and implemented modern CI/CD practices.",
//       skills: ["React", "TypeScript", "Redux", "GraphQL", "Tailwind"],
//       logo: "/company-logos/tech-innovations.png" // Replace with your actual logo path
//     },
//     {
//       role: "Frontend Developer",
//       company: "Digital Solutions",
//       duration: "2019 - 2021",
//       description: "Developed client-facing applications with focus on user experience and performance optimization. Collaborated with UX designers to create intuitive interfaces.",
//       skills: ["React", "JavaScript", "SCSS", "RESTful APIs", "Jest"],
//       logo: "/company-logos/digital-solutions.png" // Replace with your actual logo path
//     },
//     {
//       role: "Web Developer Intern",
//       company: "WebCraft Agency",
//       duration: "2018 - 2019",
//       description: "Assisted in building responsive websites for various clients while learning modern web development practices under senior mentorship.",
//       skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
//       logo: "/company-logos/webcraft.png" // Replace with your actual logo path
//     }
//   ];

//   return (
//     <section className="experience-container">
//       <h2 className="experience-title">Experience</h2>
      
//       <div className="experience-timeline">
//         {experiences.map((exp, index) => (
//           <Card key={index} className="experience-card">
//             <div className="experience-card-content">
//               <div className="experience-header">
//                 <div className="company-logo-container">
//                   <div className="company-logo-placeholder">{exp.company.charAt(0)}</div>
//                 </div>
//                 <div className="experience-meta">
//                   <h3 className="experience-role">{exp.role}</h3>
//                   <h4 className="experience-company">{exp.company}</h4>
//                   <span className="experience-duration">{exp.duration}</span>
//                 </div>
//               </div>
              
//               <p className="experience-description">{exp.description}</p>
              
//               <div className="experience-skills">
//                 {exp.skills.map((skill, i) => (
//                   <Badge key={i} value={skill} className="experience-skill-badge" />
//                 ))}
//               </div>
//             </div>
//           </Card>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Experiance;