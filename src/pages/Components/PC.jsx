import React from 'react';


const PCSection = () => {
  return (
    <section className="pc-section">
      <div className="pc-card">
        <img src="Banner1.webp" alt="Gaming Computer" />
        <h2>FIND EN PC TIL DIG!</h2>
        <a href="/gaming-computere">Se vores gaming computere</a>
      </div>
      <div className="pc-card">
        <img src="Banner2.webp" alt="PC Guide" />
        <h2>HVILKEN PC SKAL JEG VÆLGE?</h2>
        <a href="/pc-guide">PC GUIDE</a>
      </div>
    </section>
  );
};

export default PCSection;
