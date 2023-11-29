import React from 'react';
import styles from './HeroCardMid.module.scss';
import Typography from '../../atoms/Typography/Typography';
import content from '../HeroCardMid/content';
import Button from '../../atoms/Button/Button';

const HeroCardMid = () => {
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
          {content.title}
        </Typography>

        <Button variant="outline">{content.buttonText}</Button>
      </div>
    </div>
  );
};

export default HeroCardMid;
