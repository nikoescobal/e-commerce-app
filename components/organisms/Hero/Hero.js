// components/Hero/Hero.js
import React from 'react';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import Image from 'next/image';
import styles from './Hero.module.scss';
import classnames from 'classnames';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          src="/assets/images/home/mobile/image-header.jpg"
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          objectPosition="50% 75%"
          className={styles.heroImage}
          placeholder="blur"
          priority
          blurDataURL="/assets/images/home/mobile/image-header.png" // Use a base64 encoded image here
        />
      </div>
      <div className={styles.content}>
        <Typography
          color="text-color-light"
          textAlign="center"
          variant="overline"
          className={styles.title}
        >
          New Product
        </Typography>
        <Typography
          color="text-color-light"
          textAlign="center"
          variant="h3"
          fontWeight="bold"
          className={styles.subtitle}
        >
          XX99 Mark II Headphones
        </Typography>
        <Typography
          color="text-color-light"
          textAlign="center"
          variant="body"
          fontWeight="medium"
          className={styles.description}
        >
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </Typography>
        <Button className={classnames(styles.button, 'variant-primary')}>
          See Product
        </Button>
      </div>
    </section>
  );
};

export default Hero;
