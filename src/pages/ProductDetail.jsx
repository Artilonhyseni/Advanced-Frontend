import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Importér Link
import client from "./Components/contentfulClient";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "../App.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState(null);

  // Hent produktdetaljer
  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        "sys.id": id,
      })
      .then((response) => {
        if (response.items.length > 0) {
          setProduct(response.items[0].fields);
        } else {
          setError("Produkt ikke fundet.");
        }
      })
      .catch((error) => {
        console.error("Fejl ved hentning af produktdata:", error);
        setError("Der opstod en fejl under indlæsningen.");
      });
  }, [id]);

  // Hent relaterede produkter (Suggestions)
  useEffect(() => {
    client
      .getEntries({
        content_type: "product",
        limit: 3, // Begræns antal af forslag
      })
      .then((response) => {
        setSuggestions(response.items.map((item) => ({ id: item.sys.id, ...item.fields })));
      })
      .catch((error) => {
        console.error("Fejl ved hentning af relaterede produkter:", error);
      });
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <p>Indlæser produkt...</p>;
  }

  return (
    <div className="product-details">
      {/* Titel */}
      <h1>{product.name || "Produktnavn ikke tilgængeligt"}</h1>

      {/* Pris */}
      <p>
        Pris: {product.price ? `${product.price} kr.` : "Pris ikke tilgængelig"}
      </p>

      {/* Billede */}
      {product.image?.fields?.file?.url ? (
        <img
          src={product.image.fields.file.url}
          alt={product.name || "Produktbillede"}
          style={{ maxWidth: "400px" }}
        />
      ) : (
        <p>Billede ikke tilgængeligt</p>
      )}

      {/* Beskrivelse */}
      <div className="product-description">
        <h2>Beskrivelse</h2>
        {product.description ? (
          documentToReactComponents(product.description)
        ) : (
          <p>Ingen beskrivelse tilgængelig.</p>
        )}
      </div>

      {/* Specifikationer */}
      {product.specifications && (
        <div className="product-specifications">
          <h2>Specifikationer</h2>
          {Array.isArray(product.specifications) ? (
            <ul>
              {product.specifications.map((spec, index) => (
                <li key={index}>{spec}</li>
              ))}
            </ul>
          ) : (
            documentToReactComponents(product.specifications)
          )}
        </div>
      )}

      {/* Andre så også (Suggestions) */}
      <div className="suggestions">
        <h2>Andre så også:</h2>
        <div className="suggestions-grid">
          {suggestions.map((item, index) => (
            <div className="suggestion-item" key={index}>
              {item.image?.fields?.file?.url ? (
                <img
                  src={item.image.fields.file.url}
                  alt={item.name || "Billede"}
                />
              ) : (
                <div className="image-placeholder">Billede ikke tilgængeligt</div>
              )}
              <h3>{item.name || "Produktnavn"}</h3>
              <Link to={`/products/${item.id}`}>
                <button className="see-now-button">Se nu</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
