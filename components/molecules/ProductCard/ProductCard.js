// components/molecules/ProductCard/ProductCard.js
import React from 'react';
import Image from '../../atoms/Image/Image';
import Link from 'next/link';
import styles from './ProductCard.module.scss';

const ProductCard = ({ name, imageUrl, description, path }) => {
  return (
    <div className={styles.productCard}>
      <Image src={imageUrl} alt={name} layout="responsive" />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link href={path}>See product</Link>
    </div>
  );
};

export default ProductCard;
