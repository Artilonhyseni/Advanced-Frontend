import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Header() {
const {searchQuery, setSearchQuery} = useState(``);
const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

const slides = [
    {
      text: "Brug for hjælp? Tjek vores Geekd Care Kundecenter!",
      link: "#kundecenter"
    },
    {
      text: "✔ Stort udvalg på eget lager ✔ Fri fragt ved køb over DKK 899 ✔ 14 dages returret",
      link: "#fordele"
    },
    {
      text: "Erhvervskunde? Klik her!",
      link: "#erhverv"
    }
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
<div className="top-banner">
<span>Forlænget returret! Returner dine uåbnede varer helt indtil 31. Januar 2025</span>
<button className="read-more-btn">Læs mere</button>
</div>

<div className="support-banner">
    <a href={slides[currentSlideIndex].link} className="slide-content">
      {slides[currentSlideIndex].text}
    </a>
  </div>

<div className="main-header">
<div className="header-content">
<Link to="/" className="logo">
<img src="Geekd_nyt_Logo.png" alt="Geekd" />
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




<nav className="main-nav">
<div className="nav-content">
<Link to="/gaming-pc">Gaming Pc</Link>
<Link to="/komponenter">Komponenter</Link>
<Link to="/udstyr">Udstyr</Link>
<Link to="/setup">Setup</Link>
<Link to="/brands">Brands</Link>
<Link to="/simulator">Simulator</Link>
<Link to="/konsol">Konsol</Link>
<Link to="/merch">Merch</Link>
<Link to="/gavekort">Gavekort</Link>
<Link to="/spil">Spil</Link>
<Link to="/led">LED</Link>
<Link to="juletilbud" className="christmas">JULE TILBUD</Link>
</div>
</nav>
</header>

);

}

export default Header;