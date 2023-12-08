// components/organisms/ProductList/ProductList.js
import React from 'react';
import styles from './ProductList.module.scss';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import content from './content'; // Adjust the path as necessary

const ProductList = ({ category }) => {
  const products = content.products[category];

  return (
    <div className={styles.productList}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
