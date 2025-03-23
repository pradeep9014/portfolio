import React from 'react';
import '../styles.css'; 

function Home() {
    return (
        <div className="body-container" id='home'>
            <div className="intro">
                <div className="greeting">Hello, I am</div>
                <div className="name">Pradeep Reddy</div>
                <div className="role">I'm a Full Stack Developer</div>
                <p className="description">
                    Creating the future of the web by mastering both client and server-side development to bring ideas to life.
                </p>
                <div className="social-links">
                    <a href="https://www.linkedin.com/in/pradeep-reddy-634691284/" target="_blank" rel="noopener noreferrer">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="mailto:pradeepreddy9014@gmail.com">
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                </div>
                {/* Button to download resume */}
                {/* <div className="download-btn-container">
                    <a 
                        href="https://drive.google.com/your-resume-link"  // Replace with your Google Drive resume link
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="download-btn"
                    >
                        Download Resume
                    </a>
                </div> */}
            </div>
        </div>
    );
}

export default Home;
