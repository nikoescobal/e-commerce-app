// components/molecules/ProductCard/ProductCard.js
import React from 'react';
import Image from '../../atoms/Image/Image';
import styles from './ProductCard.module.scss';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';

const ProductCard = ({ item }) => {
  return (
    <div className={styles.wrapper}>
      <picture className={styles.categoryImage}>
        <source media="(min-width: 1024px)" srcSet={item.imageUrl.desktop} />
        <source media="(min-width: 768px)" srcSet={item.imageUrl.tablet} />
        <img
          src={item.imageUrl.mobile}
          alt={item.title.trim()}
          className={styles.heroImage}
        />
      </picture>

      <div className={styles.content}>
        {item.newProduct && (
          <Typography
            color="primary"
            variant="overline"
            className={styles.newProductLabel}
          >
            New Product
          </Typography>
        )}
        <Typography
          variant="h3"
          fontWeight="bold"
          color="text-color-light"
          className={styles.title}
        >
          {item.title.trim()}
        </Typography>
        <Typography
          variant="body"
          color="text-color-light"
          className={styles.description}
        >
          {item.description.trim()}
        </Typography>
        <Button className={styles.button}>{item.buttonText}</Button>
      </div>
    </div>
  );
};

export default ProductCard;
