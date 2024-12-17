import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [searchQuery, setSearchQuery] = useState(``);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const slides = [
    {
      text: "Brug for hjælp? Tjek vores Geekd Care Kundecenter!",
      link: "#kundecenter",
    },
    {
      text: "✔ Stort udvalg på eget lager ✔ Fri fragt ved køb over DKK 899 ✔ 14 dages returret",
      link: "#fordele",
    },
    {
      text: "Erhvervskunde? Klik her!",
      link: "#erhverv",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="header">
      {/* Top banner */}
      <div className="top-banner">
        <span>
          Forlænget returret! Returner dine uåbnede varer helt indtil 31. Januar
          2025
        </span>
        <button className="read-more-btn">Læs mere</button>
      </div>

      {/* Support banner */}
      <div className="support-banner">
        <a href={slides[currentSlideIndex].link} className="slide-content">
          {slides[currentSlideIndex].text}
        </a>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="header-content">
          <Link to="/" className="logo">
            <img src="Geekd_Nyt_Logo.png" alt="Geekd" />
          </Link>

          <div className="search-container">
            <div className="search-wrapper">
              <select className="search-select">
                <option>Alle</option>
              </select>

              <input
                type="text"
                placeholder="Søg efter lige det du må"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button className="search-button">🔍</button>
            </div>
          </div>

          <div className="user-actions">
            <Link to="/konto" className="icon-button"></Link>
            <Link to="/kurv" className="icon-button"></Link>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="main-nav">
        <div className="nav-content">
          {/* Menu item with submenu */}
          <div className="menu-item">
            <Link to="/gaming-pc">Gaming Pc</Link>
            <div className="submenu">
              <Link to="#">Entry Level</Link>
              <Link to="#">Mid Level</Link>
              <Link to="#">High End</Link>
              <Link to="#">Gaming Bærbar</Link>
              <Link to="#">PC Bundles</Link>
              <Link to="#">PC Guide</Link>
              <Link to="#">PC tilbud</Link>
            </div>
          </div>

          {/* Komponenter */}
          <div className="menu-item">
            <Link to="/komponenter">Komponenter</Link>
            <div className="submenu">
              <Link to="#">Grafikkort</Link>
              <Link to="#">Bundkort</Link>
              <Link to="#">CPU</Link>
              <Link to="#">Kabinet</Link>
              <Link to="#">RAM</Link>
              <Link to="#">PSU</Link>
              <Link to="#">CPU KØLER & Blæsere</Link>
            </div>
          </div>

          {/* Andre menupunkter */}
          <div className="menu-item">
            <Link to="/udstyr">Udstyr</Link>
          </div>
          <div className="menu-item">
            <Link to="/setup">Setup</Link>
          </div>
          <div className="menu-item">
            <Link to="/brands">Brands</Link>
          </div>
          <div className="menu-item">
            <Link to="/simulator">Simulator</Link>
          </div>
          <div className="menu-item">
            <Link to="/konsol">Konsol</Link>
          </div>
          <div className="menu-item">
            <Link to="/merch">Merch</Link>
          </div>
          <div className="menu-item">
            <Link to="/gavekort">Gavekort</Link>
          </div>
          <div className="menu-item">
            <Link to="/spil">Spil</Link>
          </div>
          <div className="menu-item">
            <Link to="/led">LED</Link>
          </div>
          <div className="menu-item">
            <Link to="juletilbud" className="christmas">
              JULE TILBUD
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
