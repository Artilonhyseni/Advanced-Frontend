import React from "react";

const products = [
{

    id: 1,
    name: 'Prime #1 gaming pc',
    price: '4999 kr.',
    image: 'Stationar1.webp', 

},

{
    id: 2,
    name: 'Prime #2 gaming pc',
    price: '5999 kr.',
    image: 'Strationar2.webp',
  },

  {
    id: 3,
    name: 'Top fragger gaming pc',
    price: '9999 kr.',
    image: 'Stationar3.webp',
  },
  {
    id: 4,
    name: 'Begynder gaming pc',
    price: '3999 kr.',
    image: 'Stationar4.webp',
  },

];

const Produktsektion = () => {
return ( 
<section className="gaming-pc-section">
<h2 className="section-title">Vores udvalg af gaming stationære</h2>
<div className="gaming-pc-grid">
{products.map((product) => (
<div className="product-card" key={product.id}>
<img 
src={product.image}
alt={product.name}
className="product-image"
/>
<div className="product-info">
<span className="product-subtitle">Produktnavn</span>
<h3 className="product-title">{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <button className="add-to-cart-btn">Tilføj til kurv</button>

              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Produktsektion;