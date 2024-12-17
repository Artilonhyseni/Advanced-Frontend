// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Components/Header";
import ProductOverview from "./pages/ProductsOverview";
import ProductDetail from "./pages/ProductDetail";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
  <Route path="/ProductOverview" element={<ProductOverview />} />
  <Route path="/product/:id" element={<ProductDetail />} />
</Routes>

    </Router>
  );
}

export default App;
