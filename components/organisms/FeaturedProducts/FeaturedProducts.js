// @src/components/FeaturedProducts/FeaturedProducts.jsx
import React from 'react';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import styles from './FeaturedProducts.module.scss';
import products from './content';
import HeroCard from '../HeroCard/HeroCard';

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
      <HeroCard />
    </section>
  );
};

export default FeaturedProducts;
