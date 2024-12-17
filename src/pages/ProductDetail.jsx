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
      description: "Prime 1 Gaming Computer er en kraftfuld maskine designet til den som er klar til at springet ud i PC-gaming verdenen. at overgå alle dine gamingbehov! Med en skræddersyet konfiguration, der kombinerer hastighed, kraft og pålidelighed, er Prime 1 ikke kun en computer - det er din billet til toppen af spiluniverset. Med Prime 1 Gaming Computer får du ikke kun en maskine, men en fuldendt spiloplevelse. Designet til den begynderen, som søger en maskine med en fantastisk ydeevne til arbejde og underholdning. Køb Prime 1 i dag og skub grænserne for, hvad du troede var muligt!",
      specifications: ["Grafikkort: GeForce RTX 3050 - Oplev realistisk grafik og jævn ydeevne med det avancerede grafikkort, der sikrer, at du kan spille de nyeste spil på de højeste indstillinger.",

"Bundkort: Asrock H610M-HDV/M.2 R2.0 - Et robust og pålideligt bundkort, der sikrer stabilitet og fantastisk ydeevne gennem dine mest intense gaming-sessioner.",

"RAM: DDR4 16 GB 3200MHz - Med lynhurtige hastigheder og enorm kapacitet, vil dine spil og applikationer køre glat uden lag.",

"Harddisk: Intenso SSD TOP 512GB - Nyd lynhurtige opstartstider og næsten øjeblikkelig dataadgang med denne højhastigheds SSD.",

"Køler: Intel Laminar Cooler - Hold din CPU kølig under pres med denne effektive og støjsvage køler.",

"Kabinet: Kolink Observatory Lite RGB - Et æstetisk tiltalende kabinet, der ikke kun ser godt ud men også sikrer optimal luftgennemstrømning for at holde dine komponenter kølige.",

"Strømforsyning: 650 W - Pålidelig og effektiv, denne strømforsyning sikrer konstant strøm til alle dine komponenter.",

"CPU: Intel CPU Core I3-12100F - Kraftfuld performance, der lader dig spille, streame og multitaske uden problemer.",

"Windows: Windows 11 Home - Nyd den nyeste og mest sikre version af Windows med forbedrede funktioner og optimeret ydeevne for gaming."],
      image: "/pc1.png", // Sti i public
    },
    {
      id: "2",
      name: "Prime #2 Gaming PC",
      price: 5999,
      description: "Med Prime 2 Gaming Computer får du ikke kun en maskine, men en fuldendt spiloplevelse. Designet til både hardcore gamere og dem, der søger overlegen ydeevne til arbejde og underholdning. Køb Prime 2 i dag og skub grænserne for, hvad du troede var muligt",
      specifications: ["Prime #2 Gaming Computer er en prisvenlig maskine til dem, som ikke vil gå ned på kvalitet. Denne gamer pc kan klare de fleste spil, så du kan opnå dine gamingbehov!",

        "GeForce RTX 4060: Oplev realistisk grafik og jævn ydeevne med det avancerede grafikkort, der sikrer, at du kan spille de nyeste spil på de højeste indstillinger.",
        
        "Bundkort: Asrock H610M-HDV/M.2 R2.0 - Et robust og pålideligt bundkort, der sikrer stabilitet og fantastisk ydeevne gennem dine mest intense gaming-sessioner.",
        
        "RAM: DDR4 16 GB 3200MHz - lynhurtige hastigheder og enorm kapacitet, vil dine spil og køre glat uden lag.",
        
        "Kingston 1 TB SSD: Nyd lynhurtige opstartstider og næsten øjeblikkelig dataadgang med denne højhastigheds SSD.",
        
        "ARCTIC Alpine 17 køler: Hold din CPU kølig når du gamer med denne effektive og støjsvage køler.",
        
        "Montech Air 1000 Kabinet: Et flot kabinet, der ikke kun ser godt ud men også sikrer optimal luftgennemstrømning for at holde pc'ens komponenter kølige.",
        
        "750 W Strømforsyning: Pålidelig og effektiv, denne strømforsyning sikrer konstant strøm til alle dine komponenter.",
        
        "Intel CPU Core I5-12400F: Kraftfuld performance, der lader dig spille uden problemer.",
        
        "Windows 11 Home: Du får den nyeste og mest sikre version af Windows med forbedrede funktioner og optimeret ydeevne for gaming."
        
        ],
      image: "/pc2.png", // Sti i public
    },
    {
      id: "3",
      name: "Top Fragger Gaming PC",
      price: 9999,
      description: "TOP FRAGGER Pro Gaming Computer er SKABT til dig der ikke vil gå på kompromis med lave frames eller lag i dine spil. Denne Mid-level gaming computer er en Plug And Play løsning, som du kan pakke direkte op ad pakken, sætte det hele til og begynde din winning-spree med det samme. Denne kraftfulde gamer pc skal købes af dig, som ikke vil gå på kompromis med kvaliteten og gerne vil have at det hele kører gnidningsfrit - som det skal. En klar anbefaling herfra hvis du spiller Fortnite, GTA, Minecraft, Warzone, Counter-Strike eller et hvilket som helst andet spil.",
      specifications: ["CPU:	 Intel CPU Core I5-12400F",
"GRAFIKKORT: 	RTX 4060",
"RAM:	Crucial DDR5 32GB kit 4800MHz",
"PSU: 	Nordic 750 Watt",
"BUNDKORT:	Asrock B760M",
"KABINET:	Nordic Gaming Hugin RGB",
"SSD:	Kingston NV2 PCIe 4.0 NVMe M2 SSD, 1 TB",
"Windows 11 er installeret samt windows kode medfølger"],
      image: "/pc3.png", // Sti i public
    },
    {
      id: "4",
      name: "Begynder Gaming PC",
      price: 3999,
      description: "Denne gaming maskine er specifikt designet til dem, der ønsker at tage det første skridt ind i gamingverdenen med hardware der kombinerer høj ydeevne og fremragende værdi. Med højteknologiske komponenter er denne computer klar til at håndtere både dagligdags opgaver og dine yndlingsvideospil.",
      specifications: ["CPU: AMD CPU Ryzen 5 5500: Denne kraftfulde og energieffektive processor sikrer at dit system kører smidigt og hurtigt, selv under intense gaming sessioner.",

"GRAFIKKORT: GeForce RTX 3050: Nyd krystalklar grafik og utroligt livlige farver med dette topmoderne grafikkort fra Inno3D. Med understøttelse af Ray-Tracing teknologi, kan du opleve spil med en realisme, du aldrig har set før.",

"RAM: 16GB 3200MHz: Med 16GB hurtig DDR4 RAM, er du sikret lynhurtige load tider og smidige overgange, uanset hvor krævende dit spil er.",

"MOTHERBOARD: AMD A520: Et kraftfuldt motherboard der sikrer stabil ydeevne og understøtter alle de hardware opgraderinger, du kunne have lyst til at foretage i fremtiden.",

"PSU:  650W: En pålidelig strømforsyning, der sikrer, at alle dine komponenter kører sikkert og effektivt.",

"SSD: 500GB: Med denne SSD får du hurtige opstartstider og masser af plads til dine spil, programmer og filer.",

"KABINET: Dette attraktive kabinet har et stilfuldt sort design, der passer ind i enhver indretning, samt RGB belysning der tilføjer et ekstra touch af farve og flair til dit setup."],
      image: "/pc4.png", // Sti i public
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
            src={product.image} // Direkte sti fra public
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
          className={`accordion-item ${activeAccordion === 0 ? "active" : ""}`}
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
          className={`accordion-item ${activeAccordion === 1 ? "active" : ""}`}
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
                src={relatedProduct.image} // Direkte sti fra public
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
