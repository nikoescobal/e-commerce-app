'use client';

// CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Getting cart items from local storage if available
    const localData = localStorage.getItem('cartItems');
    return localData ? JSON.parse(localData) : [];
  });

  // Clears all items from the cart
  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem('cartItems'); // Also clear from local storage
  };

  // Removes a specific item from the cart
  const removeFromCart = (productId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedCartItems)); // Update local storage
  };

  // Adds an item to the cart or updates its quantity if it already exists
  const addToCart = (product, quantity) => {
    setCartItems((prevItems) => {
      const existingProductIndex = prevItems.findIndex(
        (item) => item.id === product.id
      );
      if (existingProductIndex > -1) {
        const newCartItems = [...prevItems];
        newCartItems[existingProductIndex].quantity += quantity;
        return newCartItems;
      } else {
        // Add a new item to the cart
        const newItem = {
          ...product,
          quantity, // Add the quantity property
        };
        // Ensure newItem has an image property structured correctly
        return [...prevItems, newItem];
      }
    });
  };

  // Assuming cartItems only contains serializable data. If there are methods or React components inside cartItems, remove them first.
  // In CartContext.js or wherever you handle localStorage
  useEffect(() => {
    try {
      const cartData = cartItems.map((item) => ({
        ...item,
        // Exclude any properties that could cause circular references
        // For example, if you have a 'domNode' property that refers to a DOM element, skip it
      }));
      localStorage.setItem('cartItems', JSON.stringify(cartData));
    } catch (error) {
      console.error("Can't serialize cart items", error);
    }
  }, [cartItems]);
  // Use effect for updating local storage whenever the cartItems state changes
  // useEffect(() => {
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // }, [cartItems]);

  //   const removeFromCart = (productId) => {
  //     setCartItems(cartItems.filter(item => item.id !== productId));
  //   };

  //   useEffect(() => {
  //     localStorage.setItem('cartItems', JSON.stringify(cartItems));
  //   }, [cartItems]);

  //   const addToCart = (product, quantity) => {
  //     setCartItems((prevItems) => {
  //       const existingProductIndex = prevItems.findIndex(
  //         (item) => item.id === product.id
  //       );
  //       if (existingProductIndex > -1) {
  //         const newCartItems = [...prevItems];
  //         newCartItems[existingProductIndex].quantity += quantity;
  //         return newCartItems;
  //       } else {
  //         return [...prevItems, { ...product, quantity }];
  //       }
  //     });
  //   };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
