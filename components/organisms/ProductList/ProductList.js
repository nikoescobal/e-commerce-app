// components/organisms/ProductList/ProductList.js
import React from 'react';
import styles from './ProductList.module.scss';
import ProductCard from '../../molecules/ProductCard/ProductCard';

const ProductList = ({ items }) => {
  return (
    <section className={styles.wrapper}>
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
