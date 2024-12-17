import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import client from "./Components/contentfulClient";

const ProductOverview = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "product" }) // Hent alle produkter
      .then((response) => {
        console.log("Hentede produkter:", response.items); // Debug
        setProducts(response.items);
      })
      .catch((error) => {
        console.error("Fejl ved hentning af produkter:", error);
        setError("Kunne ikke hente produkter.");
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-overview">
      <h1>Produkter</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.sys.id} className="product-card">
            {/* Brug det rigtige sys.id i Link */}
            <Link to={`/product/${product.sys.id}`}>
              <img
                src={product.fields.image?.fields?.file?.url}
                alt={product.fields.name || "Produktbillede"}
                style={{ maxWidth: "200px" }}
              />
              <h2>{product.fields.name}</h2>
              <p>Pris: {product.fields.price} kr.</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
