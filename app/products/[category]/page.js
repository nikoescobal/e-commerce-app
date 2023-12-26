'use client';
import React from 'react';
import styles from './categories.module.scss';
import { usePathname } from 'next/navigation';
import Image from '../../../components/atoms/Image/Image';
import Button from '../../../components/atoms/Button/Button';
import Typography from '../../../components/atoms/Typography/Typography';
import classnames from 'classnames';
import ProductCategories from '../../../components/organisms/ProductCategories/ProductCategories';
import content from './content';
import { useState, useEffect } from 'react';
import ProductCard from '../../../components/molecules/ProductCard/ProductCard';
import ProductList from '../../../components/organisms/ProductList/ProductList';

const CategoryPage = () => {
  const pathname = usePathname();
  const [category, setCategory] = useState(null);

  useEffect(() => {
    const categorySlug = pathname.split('/').pop();
    console.log(
      '🚀 ~ file: page.js:30 ~ useEffect ~ categorySlug:',
      categorySlug
    );

    const foundCategory = content.categories.find((cat) =>
      cat.slug.endsWith(categorySlug)
    );

    setCategory(foundCategory);
  }, [pathname]);

  if (!category) {
    return <div>Loading...</div>;
  }
  // Adding Loading and Error State warnings
  // change useState of category to empty object
  // add logic to check if object is empty. If empty, show loading
  // if undefined, show error warning saying it doesn't exist or page doesn't exist

  return (
    <section className={styles.wrapper}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="light"
        className={styles.category}
      >
        {category.title}
      </Typography>

      <ProductList items={category.items} />
    </section>
  );
};

export default CategoryPage;
