import React from 'react';
import styles from './HeroCardBottom.module.scss';
import Typography from '../../atoms/Typography/Typography';
import content from '../HeroCardBottom/content';
import Button from '../../atoms/Button/Button';

const HeroCardBottom = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.image}></div>

      <div className={styles.content}>
        <Typography
          variant="h5"
          color="dark"
          fontWeight="bold"
          className={styles.description}
        >
          {content.name}
        </Typography>

        <Button variant="outline">{content.buttonText}</Button>
      </div>
    </div>
  );
};

export default HeroCardBottom;
