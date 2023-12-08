// components/organisms/ProductCategories/ProductCategories.js
import React from 'react';
import styles from './ProductCategories.module.scss';
import content from './content'; // Adjust the path as necessary
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';

const ProductCategories = () => {
  return (
    <section className={styles.wrapper}>
      {content.categories?.map((category) => (
        <CategoryCard
          key={category.slug}
          title={category.title}
          imageUrl={category.imageUrl}
          slug={category.slug}
        />
      ))}
    </section>
  );
};

export default ProductCategories;
