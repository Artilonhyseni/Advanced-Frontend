import React from "react";


const Kontakt = () => {
  return (
    <div className="kontakt-container">
      {/* Kontaktformular */}
      <section className="contact-section">
        <h1>Kontakt os</h1>
        <p>
          Hvis du har spørgsmål eller mangler svar på tekniske spørgsmål eller andet, kan du
          enten <br /> kontakte os direkte eller finde vores butik nedenfor.
        </p>

        <form className="contact-form">
          <label htmlFor="name">Navn</label>
          <input type="text" id="name" placeholder="Dit navn" />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" placeholder="Din e-mail" />

          <label htmlFor="message">Besked</label>
          <textarea id="message" rows="6" placeholder="Din besked"></textarea>

          <button type="submit" className="submit-btn">Send</button>
        </form>
      </section>

      {/* Kontaktinformation */}
      <section className="contact-info">
        <h2>KONTAKT GEEKD</h2>
        <p>
          <strong>Telefon:</strong>{" "}
          <a href="tel:+4571713033" className="contact-link">
            +45 71 71 30 33
          </a>
        </p>
        <p>
          <strong>E-mail:</strong>{" "}
          <a href="mailto:support@geekd.dk" className="contact-link">
            support@geekd.dk
          </a>
        </p>
      </section>

      {/* Åbningstider */}
      <section className="store-info">
        <h2>GEEKDS ÅBNINGSTIDER</h2>
        <p>
          <em>Man - Fre 10.00 - 18.00</em>
        </p>
        <p>
          <em>Lørdag - Søndag: Lukket</em>
        </p>

        <h3>HVOR LIGGER GEEKDS BUTIK?</h3>
        <p>
          Du er altid velkommen til at kigge forbi i vores butik i Kolding, beliggende på <br />
          <strong>Mønten 2, 6000 Kolding</strong>. <br /> Her gælder åbningstiderne også fra ovenstående, og vi glæder os til at se dig i butikken.
        </p>
      </section>
    </div>
  );
};

export default Kontakt;
