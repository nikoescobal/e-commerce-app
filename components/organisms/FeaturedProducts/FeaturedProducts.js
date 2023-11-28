// @src/components/FeaturedProducts/FeaturedProducts.jsx
import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './FeaturedProducts.module.scss';
import products from './content';
import HeroCardTop from '../HeroCardTop/HeroCardTop';
import HeroCardMid from '../HeroCardMid/HeroCardMid';
import HeroCardBottom from '../HeroCardBottom/HeroCardBottom';

const FeaturedProducts = () => {
  return (
    // <section className={styles.featuredProducts}>
    //   {products.map((product) => (
    //     <ProductCard
    //       key={product.id}
    //       product={product}
    //       type={product.type} // 'featured', 'standard', or 'split'
    //     />
    //   ))}
    // </section>
    <section className={styles.featuredProducts}>
      <HeroCardTop />
      <HeroCardMid />
      <HeroCardBottom />
    </section>
  );
};

export default FeaturedProducts;
