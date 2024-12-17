import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email) {
      console.log("Login kode sendt til:", email);
      navigate("/"); 
    } else {
      alert("Indtast en gyldig e-mailadresse.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
       
        <h2>Log ind</h2>
        <p>Angiv din mailadresse, så sender vi en loginkode til dig</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button" disabled={!email}>
            Fortsæt
          </button>
        </form>

        <p>
          Har du ikke en bruger?{" "}
          <Link to="/signup" className="signup-link">
            Opret bruger
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
