
import { useParams } from "react-router-dom";
import "../App.css";
function ProductDetail() {
  const { id } = useParams(); // Hent id fra URL
  const products = [
    {
      id: "1",
      name: "Prime #1 Gaming PC",
      price: 4999,
      description: "Perfekt til begyndere med kraftig performance.",
      image: "pc1.png",
    },
    {
      id: "2",
      name: "Prime #2 Gaming PC",
      price: 5999,
      description: "En solid gaming PC til mellemkrav.",
      image: "pc2.png",
    },
    {
      id: "3",
      name: "Top Fragger Gaming PC",
      price: 9999,
      description:
        "TOP FRAGGER Pro Gaming Computer er SKABT til dig, der ikke vil gå på kompromis.",
      image: "pc3.png",
    },
  ];

  // Find produktet baseret på id
  const product = products.find((p) => p.id === id);

  if (!product) {
    return <h2>Produktet blev ikke fundet</h2>;
  }

  return (
    <div className="product-detail">
      <div className="product-header">
        <h1>{product.name}</h1>
        <p>{product.price} kr.</p>
      </div>
      <div className="product-content">
        <img
          src={`src/assets/pcinfo/${product.image}`}
          alt={product.name}
          className="product-image"
        />
        <p>{product.description}</p>
        <button className="btn add-to-cart">Tilføj til kurv</button>
      </div>
    </div>
  );
}

export default ProductDetail;
