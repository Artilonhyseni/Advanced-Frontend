// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Components/Header";
import ProductOverview from "./pages/ProductsOverview";
import ProductDetail from "./pages/ProductDetail";
import './App.css';
import Kategori from './pages/Components/Kategori';
import Produktsektion from './pages/Components/Produkter';
import PCSection from './pages/Components/PC';
import Footer from './pages/Components/Footer';
import Kontakt from './pages/Kontakt'; // Import Kontakt-komponenten

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Routes>
            {/* Forsiden viser alle de relevante komponenter */}
            <Route 
              path="/" 
              element={
                <>
                  <div className="midt">
                    <img src="/Gaming.webp" alt="månedens-deal" />
                  </div>
                  <Kategori />
                  <Produktsektion />
                  <PCSection />
                </>
              } 
            />
            
            {/* Kun Kontakt-siden vises, når brugeren navigerer til /kontakt */}
            <Route path="/kontakt" element={<Kontakt />} /> 

            {/* Andre routes */}
            <Route path="/ProductOverview" element={<ProductOverview />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
