import { useParams, Link } from "react-router-dom";
import "../App.css";
import { useState } from "react";

function ProductDetail() {
  const { id } = useParams();
  const products = [
    {
      id: "1",
      name: "Prime #1 Gaming PC",
      price: 4999,
      description: "Perfekt til begyndere med kraftig performance.",
      specifications: ["8GB RAM", "500GB SSD", "GTX 1660 Super"],
      image: "src/assets/pc1.png",
    },
    {
      id: "2",
      name: "Prime #2 Gaming PC",
      price: 5999,
      description: "En solid gaming PC til mellemkrav.",
      specifications: ["16GB RAM", "1TB SSD", "RTX 3060"],
      image: "src/assets/pc2.png",
    },
    {
      id: "3",
      name: "Top Fragger Gaming PC",
      price: 9999,
      description: "Pro Gaming Computer til dem, der ikke vil gå på kompromis.",
      specifications: ["32GB RAM", "2TB SSD", "RTX 4090"],
      image: "src/assets/pc3.png",
    },
    {
      id: "4",
      name: "Begynder Gaming PC",
      price: 3999,
      description: "En budgetvenlig PC til nybegyndere inden for gaming.",
      specifications: ["4GB RAM", "256GB SSD", "Intel HD Graphics"],
      image: "src/assets/pc4.png",
    },
  ];

  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Produktet blev ikke fundet</h2>;
  }

  // Find relaterede produkter (alle andre end det aktuelle produkt)
  const relatedProducts = products.filter((p) => p.id !== id);

  // Accordion state
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="product-detail">
      <div className="detail-container">
        {/* Produktbillede */}
        <div className="image-section">
          <img
            src={`src/assets/${product.image}`}
            alt={product.name}
            className="detail-image"
          />
        </div>

        {/* Produktinformation */}
        <div className="info-section">
          <h1 className="detail-title">{product.name}</h1>
          <p className="detail-price">{product.price} kr.</p>
          <button className="btn add-to-cart">Tilføj til kurv</button>
        </div>
      </div>

      {/* Accordions */}
      <div className="accordion-container">
        <div
          className={`accordion-item ${
            activeAccordion === 0 ? "active" : ""
          }`}
          onClick={() => toggleAccordion(0)}
        >
          <h3>Beskrivelse</h3>
          {activeAccordion === 0 && (
            <div className="accordion-content">
              <p>{product.description}</p>
            </div>
          )}
        </div>
        <div
          className={`accordion-item ${
            activeAccordion === 1 ? "active" : ""
          }`}
          onClick={() => toggleAccordion(1)}
        >
          <h3>Specifikationer</h3>
          {activeAccordion === 1 && (
            <div className="accordion-content">
              <ul>
                {product.specifications.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Karussel med relaterede produkter */}
      <h2 className="section-title">Relaterede Produkter</h2>
      <div className="carousel">
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.id} className="carousel-item">
            <Link to={`/product/${relatedProduct.id}`}>
              <img
                src={`src/assets/${relatedProduct.image}`}
                alt={relatedProduct.name}
                className="carousel-image"
              />
              <h4>{relatedProduct.name}</h4>
              <p>{relatedProduct.price} kr.</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductDetail;
