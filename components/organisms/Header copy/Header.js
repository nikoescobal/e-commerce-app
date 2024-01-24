// components/Header/Header.js
'use client';

import React, { useState, useContext, useEffect } from 'react';
import styles from './Header.module.scss';
import Image from '../../atoms/Image/Image';
import content from './content';
import Link from 'next/link';
import ProductCategories from '../ProductCategories/ProductCategories';
import ClientHeader from './ClientHeader.client';
import Button from '../../atoms/Button/Button';
import Modal from '../../molecules/Modal/Modal';
import classNames from 'classnames';
import { CartContext } from '../../../context/CartContext';
import CartItemsList from '../Products/Products';

const Header = ({ isModalView }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cartItems, removeFromCart, clearCart, isCartOpen, setIsCartOpen } =
    useContext(CartContext);

  const handleToggleModal = () => {
    setIsCartOpen(!isCartOpen);
  };

  const cardClass = classNames(styles.wrapper, {
    [styles.overlay]: isModalView,
  });

  const toggleModal = () => setModalOpen(!isModalOpen);
  const logCartItems = () => {};
  console.log(
    '🚀 ~ file: Header.js:28 ~ logCartItems ~ logCartItems:',
    logCartItems
  );

  useEffect(() => {
    logCartItems();
  }, [cartItems]);

  const CartModal = () => (
    <Modal isOpen={isCartOpen} onClose={toggleModal}>
      <CartItemsList cartItems={cartItems} removeFromCart={removeFromCart} />

      {/* Cart content should go here */}
      {/* Map through cartItems to display them */}
      {cartItems.map((item) => (
        <div key={item.id} className={styles.item}>
          <img
            src={item.image?.mobile} // Use optional chaining to safely access image.mobile
            alt={item.name}
          />
          {/* ... */}
        </div>
      ))}
      {/* ... other cart functionalities ... */}
    </Modal>
  );

  return (
    <header className={styles.cardClass}>
      {/* {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={toggleModal}>
          <div className={styles.modalContent}>
            <h2>Cart ({cartItems.length})</h2>
            <Button onClick={clearCart}>Remove all</Button>
            <CartItemsList
              cartItems={cartItems}
              removeFromCart={removeFromCart}
            />
          </div>
        </Modal>
      )} */}
      {/* {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.popup}>
            <div>Cart ({cartItems.length})</div>
            <button onClick={clearCart}>Remove all</button>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.item}>
                <img src={item.image?.mobile} alt={item.name} />
                <div>
                  <div>{item.name}</div>
                  <div>${item.price}</div>
                  <div>Quantity: {item.quantity}</div>
                  <button onClick={() => removeFromCart(item.id)}>
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          className={styles.overlay}
          onClick={() => setModalOpen(false)}
        ></div>
      )} */}
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
          <CartItemsList
            cartItems={cartItems}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        </Modal>
      )}
      <nav className={styles.nav}>
        {/* Client-Side Interactive Header */}
        <ClientHeader />

        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src={content.logo.src}
            alt={content.logo.alt}
            width={content.logo.width}
            height={content.logo.height}
          />
        </Link>

        {/* Cart Icon */}
        <Button onClick={toggleModal} className={styles.cartIcon}>
          <Image
            src={content.cartIcon.src}
            alt={content.cartIcon.alt}
            width={content.cartIcon.width}
            height={content.cartIcon.height}
          />
        </Button>
        {isCartOpen && (
          <Modal isOpen={isCartOpen} onClose={handleToggleModal}>
            <CartItemsList
              cartItems={cartItems}
              removeFromCart={removeFromCart}
              clearCart={clearCart}
              // Pass the updateQuantity function here
            />
          </Modal>
        )}
      </nav>

      <div className={styles.border}></div>
    </header>
  );
};

export default Header;
