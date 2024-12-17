import React from "react";
import { useNavigate } from "react-router-dom"; // Importer useNavigate til navigation

const Kategori = () => {
  const navigate = useNavigate(); // Initialiser navigationsfunktionen

  const kategori = [
    { title: "Computere", icon: "Computer.webp", route: "/productoverview" }, // Tilføj route til Computere
    { title: "Gaming tastaturer", icon: "Tastatur.webp" },
    { title: "Headsets", icon: "Headset.webp" },
    { title: "Gamer muse", icon: "Mus.webp" },
    { title: "Gaming skærme", icon: "Skærm.webp" },
    { title: "Gaming stole", icon: "Stole.webp" }
  ];

  const handleCategoryClick = (route) => {
    if (route) {
      navigate(route); // Navigér til den angivne route
    }
  };

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
          <div
            key={index}
            className="category-item"
            onClick={() => handleCategoryClick(kategori.route)} // Tilføj onClick hændelse
            style={{ cursor: kategori.route ? "pointer" : "default" }} // Ændr cursor, hvis der er en route
          >
            <div className="category-icon">
              {/* Bruger absolut sti til billederne */}
              <img
                src={kategori.icon}
                alt={kategori.title}
                className="category-icon-img"
                onError={() =>
                  console.log(`Fejl ved indlæsning af billede: ${kategori.icon}`)
                }
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
