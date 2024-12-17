import { Link } from "react-router-dom";

const Kategori = () => {
  const kategori = [
    { title: "Computere", icon: "Computer.webp", route: "/ProductOverview" }, 
    { title: "Gaming tastaturer", icon: "Tastatur.webp" },
    { title: "Headsets", icon: "Headset.webp" },
    { title: "Gamer muse", icon: "Mus.webp" },
    { title: "Gaming skærme", icon: "Skærm.webp" },
    { title: "Gaming stole", icon: "Stole.webp" }
  ];

  return (
    <div className="categories-section">
      <div className="categories-header">
        <h2>UDVALGTE KATEGORIER</h2>
        <Link to="/ProductOverview" className="see-all">
          Se alle
        </Link>
      </div>

      <div className="categories-grid">
        {kategori.map((item, index) => (
          <div key={index} className="category-item">
            <Link to={item.route || "#"}> {/* Tilføj Link her */}
              <div className="category-icon">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="category-icon-img"
                />
              </div>
              <p>{item.title}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Kategori;
