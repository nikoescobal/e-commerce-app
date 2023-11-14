// components/organisms/ProductCategories/ProductCategories.js
import React from 'react';
import styles from './ProductCategories.module.scss';
import content from './content';
import classNames from 'classnames';
import CategoryCard from '../../molecules/CategoryCard/CategoryCard';

const ProductCategories = () => {
  return (
    <section className={styles.productCategories}>
      {content.map((category) => (
        <CategoryCard
          className={styles.productCategory}
          key={category.slug}
          {...category}
        />
      ))}
    </section>
  );
};

export default ProductCategories;
