import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products.jsx';
import ProductDetails from './Pages/Product_Details/Project_Details';
import Home from './Pages/home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products SectionTitle="Product List" />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
