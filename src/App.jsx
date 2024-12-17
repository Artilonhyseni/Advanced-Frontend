import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Components/Header';
import Kategori from './pages/Components/Kategori';
import Produktsektion from './pages/Components/Produkter';
import PCSection from './pages/Components/PC';
import Footer from './pages/Components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header /> 
        <div className="content-wrapper"> 
          <div className="midt">
            <img src="/Gaming.webp" alt="månedens-deal" />
          </div>
          <Kategori /> 
          <Produktsektion />
          <PCSection/>
          <Routes>
            {/* Tilføj dine ruter her */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
