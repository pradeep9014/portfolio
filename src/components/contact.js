import React from 'react';
import "../styles/contact.css"

const Contact = () => {
  return (
    <div className="contact-us-page" id='contact'>
      <h1>Contact <span style={{color:"#f39c12"}}> Me</span></h1>
      <p className="intro-text">I'd love to hear from you! Feel free to reach out if you'd like to connect.</p>

      <div className="social-links-contact">
        <div className="social-button contact">
          <a href="https://www.linkedin.com/in/pradeep-reddy-634691284/" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <i className="fa-brands fa-linkedin"></i>
            </div>
            <span className="icon-text">LinkedIn</span>
          </a>
        </div>

        <div className="social-button email">
          <a href="mailto:pradeepreddy9014@gmail.com" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <i className="fa-solid fa-envelope"></i>
            </div>
            <span className="icon-text">Email</span>
          </a>
        </div>

        <div className="social-button instagram">
          <a href="https://www.instagram.com/__pradeep__reddy__/" target="_blank" rel="noopener noreferrer">
            <div className="icon-circle">
              <i className="fa-brands fa-instagram"></i>
            </div>
            <span className="icon-text">Instagram</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;