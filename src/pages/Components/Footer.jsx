
import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Kontakt</h3>
          <p>Geekd ApS</p>
          <p>Mønten 2</p>
          <p>8000 Kolding</p>
          <p>CVR 39808282</p>
          <p>support@geekd.dk</p>
        </div>

        <div className="footer-section">
          <h3>Kundeservice</h3>
          <ul>
            <li><a href="/mine-ordrer">Mine Ordrer</a></li>
            <li><a href="/returning">Returning</a></li>
            <li><a href="/find-os">Her finder du os</a></li>
            <li><a href="/kontakt">Kontakt os</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Information</h3>
          <ul>
            <li><a href="/sikker-handel">Sikker handel</a></li>
            <li><a href="/handelsvilkar">Handelsvilkår</a></li>
            <li><a href="/privatlivspolitik">Privatlivspolitik</a></li>
            <li><a href="/gaming-artikler">Gaming artikler</a></li>
            <li><a href="/erhverv">Erhverv / B2B</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Nyhedsbrev</h3>
          <p>Få alle de bedste tilbud og nyheder og bliv en del af Geekd familien.</p>
          <p>Tilmeld dig her:</p>
          <input type="email" placeholder="Din e-mail" />
        </div>
      </div>

      <div className="payment-methods">
        <img src="dankort.png" alt="Betalingsmetoder" />
        <img src="mastercard.png" alt="Betalingsmetoder" />
        <img src="paypal.png" alt="Betalingsmetoder" />
        <img src="visa.png" alt="Betalingsmetoder" />
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © 2024 Geekd
        </div>
        <div className="footer-links">
          <a href="/kontaktinformation">Kontaktinformation</a>
          <a href="/privatpolitik">Privatpolitik</a>
          <a href="/returpolitik">Returpolitik</a>
          <a href="/fragtpolitik">Fragtpolitik</a>
          <a href="/handelsbetingelser">Handelsbetingelser</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;