import React from 'react';
import Image from '../../atoms/Image/Image';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './Hero.module.scss';
import classnames from 'classnames';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <Image
          // width={100}
          // height={100}
          src="/assets/images/home/mobile/image-header.jpg" // Default image for mobile
          alt="Hero Background"
          className={classnames(styles.heroImage, {
            [styles.heroImageDesktop]: false, // We will enable this class using state or props based on the viewport
          })}
          // layout="responsive"
          priority
          fill
          objectFit="cover"
          objectPosition="50% 75%"
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