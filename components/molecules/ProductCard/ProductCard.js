// components/ProductCard/ProductCard.js
import React from 'react';
import Button from '../Button/Button'; // adjust import path as necessary
import styles from './ProductCard.module.scss';
import Typography from '../../atoms/Typography/Typography';
import Image from '../../atoms/Image/Image';

const ProductCard = ({ product }) => {
  // product contains info like name, image, description, price, etc.
  return (
    <div className={styles.productCard}>
      <Image src={product.image} alt={product.name} objectFit="cover" />
      <div className={styles.productInfo}>
        <h3 className={styles.productName}>{product.name}</h3>
        <p className={styles.productDescription}>{product.description}</p>
        <span className={styles.productPrice}>{`$${product.price}`}</span>
        <Button className={styles.addToCartButton}>Add to Cart</Button>
      </div>
    </div>
  );
};

export default ProductCard;
