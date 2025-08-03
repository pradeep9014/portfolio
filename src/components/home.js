import React, { useEffect, useRef } from "react";
import "../styles/home.css";

function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "floating-particle";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";

      const shapes = ["◆", "▲", "●", "◼", "⬢", "⭐"];
      particle.textContent = shapes[Math.floor(Math.random() * shapes.length)];

      if (containerRef.current) {
        containerRef.current.appendChild(particle);
      }

      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 20000);
    };

    for (let i = 0; i < 15; i++) {
      setTimeout(() => createParticle(), i * 1000);
    }

    const interval = setInterval(createParticle, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="portfolio-container" ref={containerRef}>
      <div className="background-gradient"></div>
      <div className="grid-overlay"></div>

      {/* 3D Tech Elements */}
      <div className="tech-elements">
        <div className="floating-code">{"<>"}</div>
        <div className="floating-bracket">{"{ }"}</div>
        <div className="floating-tag">{"</>"}</div>
        <div className="floating-symbol">{"λ"}</div>
        <div className="floating-hash">{"#"}</div>
      </div>

      {/* Main Content */}
      <div className="content-wrapper">
        <div className="intro-card">
          <div className="greeting">Hello, I am</div>
          <div className="name">
            <span className="name-text">Pradeep Reddy</span>
            <div className="name-underline"></div>
          </div>
          <div className="role">
            <span className="role-text">Full Stack Developer</span>
          </div>
          <p className="description">
            Creating the future of the web by mastering both client and
            server-side development to bring innovative ideas to life with
            cutting-edge technology.
          </p>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/pradeep-reddy-634691284/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link linkedin"
            >
              <div className="link-bg"></div>
              <span className="link-icon">in</span>
            </a>
            <a
              href="mailto:pradeepreddy9014@gmail.com"
              className="social-link email"
            >
              <div className="link-bg"></div>
              <span className="link-icon">@</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
