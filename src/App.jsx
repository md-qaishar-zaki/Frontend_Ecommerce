import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './Components/Products/Products.jsx';
import ProductDetails from './Pages/Product_Details/Project_Details';
import Home from './Pages/Home/Home.jsx';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import CategoriesProduct from './Pages/Categories-Product-Pages/Categories_Product_Pages.jsx';
import Checkout from './Pages/checkout/checkout.jsx'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products SectionTitle="Product List" />} />
        <Route path="/product/:id" element={<ProductDetails />} />        
        <Route path="SearchResult" element={<CategoriesProduct />} />
        <Route path="SearchResult/Features" element={<CategoriesProduct />} />
        <Route path="checkout" element={<Checkout />}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
