// @src/components/FeaturedProducts/FeaturedProducts.jsx
import React from 'react';
import styles from './FeaturedProducts.module.scss';
import HeroCardTop from '../HeroCardTop/HeroCardTop';
import HeroCardMid from '../HeroCardMid/HeroCardMid';
import HeroCardBottom from '../HeroCardBottom/HeroCardBottom';

const FeaturedProducts = () => {
  return (
    <section className={styles.featuredProducts}>
      <HeroCardTop />
      <HeroCardMid />
      <HeroCardBottom />
    </section>
  );
};

export default FeaturedProducts;
