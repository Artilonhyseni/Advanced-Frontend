import React from "react";

const Kategori = () => {
  const kategori = [
    { title: "Computere", icon: "/Computer.webp" }, // Brug absolut sti i public-mappen
    { title: "Gaming tastaturer", icon: "/Tastatur.webp" },
    { title: "Headsets", icon: "/Headset.webp" },
    { title: "Gamer muse", icon: "/Mus.webp" },
    { title: "Gaming skærme", icon: "/Skærm.webp" },
    { title: "Gaming stole", icon: "/Stole.webp" }
  ];

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h2>UDVALGTE KATEGORIER</h2>
        <a href="#" className="see-all">
          Se alle
        </a>
      </div>

      <div className="categories-grid">
        {kategori.map((kategori, index) => (
          <div key={index} className="category-item">
            <div className="category-icon">
              {/* Bruger absolut sti til billederne */}
              <img
                src={kategori.icon} // Brug absolut sti her
                alt={kategori.title}
                className="category-icon-img"
                onError={() => console.log(`Fejl ved indlæsning af billede: ${kategori.icon}`)} 
              />
            </div>
            <p>{kategori.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategori;

