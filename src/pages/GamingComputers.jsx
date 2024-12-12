import React from "react";
import "../app.css"; 

const GamingComputers = () => {
  return (
    <div className="page-wrapper">
      {/* Header */}
      <header className="header">
        <div className="logo">GEK.io</div>
        <div className="header-controls">
          <input
            type="text"
            placeholder="Søg..."
            className="search-input"
          />
          <div className="icon-buttons">
            <button>🔍</button>
            <button>👤</button>
            <button>🛒</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <h1>GAMING COMPUTER</h1>
      </section>

      {/* Product Grid */}
      <main className="product-grid">
        <h2>Vores udvalg af gaming stationære</h2>
        <div className="grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <h3>{product.name}</h3>
              <p>{product.price} kr.</p>
              <button className="add-to-cart">Tilføj til kurv</button>
            </div>
          ))}
        </div>
      </main>

      {/* Link Section */}
      <section className="link-section">
        <div className="links">
          <div className="link-card">
            <img
              src="/path-to-image1.jpg"
              alt="Find en PC"
              className="link-image"
            />
            <h3>FIND EN PC TIL DIG!</h3>
            <a href="#" className="link-text">
              Se vores gaming computere
            </a>
          </div>
          <div className="link-card">
            <img
              src="/path-to-image2.jpg"
              alt="PC Guide"
              className="link-image"
            />
            <h3>HVILKEN PC SKAL JEG VÆLGE?</h3>
            <a href="#" className="link-text">
              PC GUIDE
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

const products = [
  {
    name: "Prime #1 gaming pc",
    price: 4999,
    image: "/path-to-image1.jpg",
  },
  {
    name: "Prime #2 gaming pc",
    price: 5999,
    image: "/path-to-image2.jpg",
  },
  {
    name: "Top fragger gaming pc",
    price: 9999,
    image: "/path-to-image3.jpg",
  },
  {
    name: "Begynder gaming pc",
    price: 3999,
    image: "/path-to-image4.jpg",
  },
];

export default GamingComputers;
