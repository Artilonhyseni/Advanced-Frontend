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
import Login from "./pages/Components/Login";

function HomePage() {
  return (
    <>
      <div className="midt">
        <img src="/Gaming.webp" alt="månedens-deal" />
      </div>
      <Kategori />
      <Produktsektion />
      <PCSection />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content-wrapper">
          <Routes>
            {/* Forsiden */}
            <Route path="/" element={<HomePage />} />
            {/* Product Overview */}
            <Route path="/ProductOverview" element={<ProductOverview />} />
            {/* Product Detail */}
            <Route path="/product/:id" element={<ProductDetail />} />
            {/* Fallback for ukendte ruter */}


            <Route path="*" element={<h1>Siden blev ikke fundet</h1>} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
        <Footer />
      </div>
    
    

    </Router>
  );
}

export default App;
