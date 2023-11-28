import React from 'react';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import content from './content';
import styles from './HeroCardTop.module.scss';

const HeroCardTop = () => {
  return (
    <div className={styles.wrapper}>
      {/* Background pattern wrapper */}

      <div className={styles.bgImage}></div>
      {/* Product image wrapper */}

      <div className={styles.image}> </div>
      {/* Content wrapper */}

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
        <Button variant="outline">{content.buttonText}</Button>
      </div>
    </div>
  );
};

export default HeroCardTop;
