import React from 'react';
import Button from '../../atoms/Button/Button';
import Image from '../../atoms/Image/Image';
import Typography from '../../atoms/Typography/Typography';
import content from './content';
import styles from './HeroCard.module.scss';

const HeroCard = ({ product }) => {
  return (
    <div className={styles.heroCard}>
      <div className={styles.bgImageWrapper}>
        <Image
          className={styles.background}
          src={content.background}
          alt={content.title}
          fill={true}
          objectFit="cover"
        />
      </div>

      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={content.image}
          alt={content.title}
          fill={true}
          objectFit="cover"
        />
      </div>

      <div className={styles.heroContent}>
        <Typography
          variant="h2"
          color="light"
          fontWeight="bold"
          className={styles.name}
        >
          {content.name}
        </Typography>
        {content.description && (
          <Typography
            variant="body"
            color="light"
            fontWeight="medium"
            className={styles.description}
          >
            {content.description}
          </Typography>
        )}
        <Button className={styles.button}>{content.buttonText}</Button>
      </div>
    </div>
  );
};

export default HeroCard;
