import React from "react";
import "../styles/footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="copyright-container">
      <p>&copy; {currentYear} Pradeep Reddy. All rights reserved.</p>
    </div>
  );
};

export default Footer;
