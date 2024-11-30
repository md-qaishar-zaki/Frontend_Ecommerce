import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Import the UUID library

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [userId, setUserId] = useState('');

  // Function to get or create a unique user ID
  const getUserId = () => {
    let storedUserId = localStorage.getItem('userId');
    if (!storedUserId) {
      storedUserId = uuidv4();
      localStorage.setItem('userId', storedUserId);
    }
    return storedUserId;
  };

  useEffect(() => {
    const id = getUserId();
    setUserId(id);
    const storedCart = JSON.parse(localStorage.getItem(`cart_${id}`)) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    if (userId) {
      localStorage.setItem(`cart_${userId}`, JSON.stringify(cart));
    }
  }, [cart, userId]);

  const normalizeSlug = (slug) => slug.toLowerCase().replace(/\s+/g, '-');

  const addToCart = (productSlug) => {
    const normalizedSlug = normalizeSlug(productSlug);
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.slug === normalizedSlug);
      if (existingProduct) {
        // Increase the quantity if the product already exists in the cart
        return prevCart.map(item =>
          item.slug === normalizedSlug ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add the product with a quantity of 1 if it's not in the cart
        return [...prevCart, { slug: normalizedSlug, quantity: 1 }];
      }
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, getTotalItems }}>
      {children}
    </CartContext.Provider>
  );
};
