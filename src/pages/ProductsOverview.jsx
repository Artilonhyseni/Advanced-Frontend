import { Link } from "react-router-dom";
import "../App.css"; // Stilark til fælles brug

function ProductOverview() {
  const products = [
    { id: 1, name: "Prime #1 Gaming PC", price: 4999, image: "pc1.png" },
    { id: 2, name: "Prime #2 Gaming PC", price: 5999, image: "pc2.png" },
    { id: 3, name: "Top Fragger Gaming PC", price: 9999, image: "pc3.png" },
    { id: 4, name: "Begynder Gaming PC", price: 3999, image: "pc4.png" },
  ];

  return (
    <div className="product-overview">
      {/* Hero Section */}
      <div className="hero">
        <div className="hero-content">
          <h1>Velkommen til Gaming Paradise</h1>
          <p>Find din næste gaming computer her!</p>
        </div>
        <img
          src="src/assets/hero-img.png"
          alt="Hero Gaming PC"
          className="hero-image"
        />
      </div>

      {/* Product List */}
      <h2 className="section-title">Vores Produkter</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            {/* Klikbart billede */}
            <Link to={`/product/${product.id}`}>
              <img
                src={`src/assets/${product.image}`}
                alt={product.name}
                className="product-image"
              />
            </Link>
            <h3>{product.name}</h3>
            <p>{product.price} kr.</p>
            {/* "Se detaljer"-knap */}
            <Link to={`/product/${product.id}`} className="btn view-details">
              Se detaljer
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOverview;
