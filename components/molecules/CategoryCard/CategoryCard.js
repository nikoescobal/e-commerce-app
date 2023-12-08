// components/molecules/CategoryCard/CategoryCard.js
import React from 'react';
import styles from './CategoryCard.module.scss';
import Image from '../../atoms/Image/Image';
import ButtonWithIcon from '../../atoms/ButtonWithIcon/ButtonWithIcon';
import Typography from '../../atoms/Typography/Typography';

const CategoryCard = ({ title, imageUrl, slug }) => {
  // Add slug as a prop
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={title}
          width={96}
          height={96}
          layout="responsive"
        />
      </div>
      <div className={styles.cardContent}>
        <Typography
          color="text-color-dark"
          fontWeight="bold"
          textAlign="center"
          variant="h6"
          className={styles.title}
        >
          {title.toUpperCase()}
        </Typography>
        <ButtonWithIcon
          href={`/products/${slug}`} // Pass the dynamic href here
          variant="shop"
          iconSrc="/assets/icons/icon-arrow-right.svg"
          iconAlt="Right Arrow"
          iconWidth={18}
          iconHeight={18}
        >
          SHOP
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default CategoryCard;
