import React from "react";

const DotsLoader = () => {
  const styles = `
    .dots-loader-container {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 24px;
      color: white;
      height: 100vh;
      background-color: black;
      font-family: Arial, sans-serif;
    }

    .dot {
      animation: bounce 1.5s infinite;
      margin: 0 2px;
    }

    .dot:nth-child(1) { animation-delay: 0s; }
    .dot:nth-child(2) { animation-delay: 0.1s; }
    .dot:nth-child(3) { animation-delay: 0.2s; }
    .dot:nth-child(4) { animation-delay: 0.3s; }
    .dot:nth-child(5) { animation-delay: 0.4s; }
    .dot:nth-child(6) { animation-delay: 0.5s; }
    .dot:nth-child(7) { animation-delay: 0.6s; }
    .dot:nth-child(8) { animation-delay: 0.7s; }
    .dot:nth-child(9) { animation-delay: 0.8s; }
    .dot:nth-child(10) { animation-delay: 0.9s; }

    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="dots-loader-container">
        <span className="dot">L</span>
        <span className="dot">o</span>
        <span className="dot">a</span>
        <span className="dot">d</span>
        <span className="dot">i</span>
        <span className="dot">n</span>
        <span className="dot">g</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </div>
    </>
  );
};

export default DotsLoader;
