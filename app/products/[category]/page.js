'use client';
import React from 'react';
import styles from '../products.module.scss';
import { usePathname } from 'next/navigation';
import Image from '../../../components/atoms/Image/Image';
import Button from '../../../components/atoms/Button/Button';
import Typography from '../../../components/atoms/Typography/Typography';
import classnames from 'classnames';
import ProductCategories from '../../../components/organisms/ProductCategories/ProductCategories';
import content from './content';
import CategoryCard from '../../../components/molecules/CategoryCard/CategoryCard';
import { useState, useEffect } from 'react';

// console.log(
//   '🚀 ~ file: page.js:11 ~ content:',
//   content.categories.title.toLowerCase
// );

// step 1: iterate through every category

// check if it logs
// step : match category from path name to category retrieved from content

const ProductCategory = () => {
  const pathname = usePathname();
  const [activeCategory, setActiveCategory] = useState(null);

  useEffect(() => {
    const categorySlug = pathname.split('/').pop();
    console.log(
      '🚀 ~ file: page.js:30 ~ useEffect ~ categorySlug:',
      categorySlug
    );

    const foundCategory = content.categories.find((cat) =>
      cat.slug.endsWith(categorySlug)
    );
    console.log(
      '🚀 ~ file: page.js:32 ~ useEffect ~ foundCategory:',
      foundCategory
    );
    setActiveCategory(foundCategory);
  }, [pathname]);

  if (!activeCategory) {
    return <div>Loading...</div>;
  }

  // console.log('🚀 ~ file: page.js:26 ~ ProductCategory ~ pathname:', pathname);
  // const category = usePathname().split('/products/');
  // const categoryAdjusted = category[1];
  // const allCategories = content.categories;
  // const [itemTitle, setItemTitle] = useState('test');
  // console.log(
  //   '🚀 ~ file: page.js:29 ~ ProductCategory ~ itemTitle:',
  //   itemTitle
  // );

  // console.log(
  //   '🚀 ~ file: page.js:26 ~ ProductCategory ~ allCategories:',
  //   allCategories
  // );
  // console.log(
  //   '🚀 ~ file: page.js:25 ~ ProductCategory ~ categoryAdjusted:',
  //   categoryAdjusted
  // );

  // useEffect(() => {
  //   allCategories.map((cat) => {
  //     const catTitle = cat.title.toLowerCase();
  //     const catItems = cat.items;

  //     if (catTitle === categoryAdjusted.toLowerCase()) {
  //       console.log(
  //         '🚀 ~ file: page.js:37 ~ allCategories.map ~ item.title:',
  //         catTitle
  //       );
  //       console.log(
  //         '🚀 ~ file: page.js:38 ~ allCategories.map ~ catItems:',
  //         catItems
  //       );

  //       catItems.map((item) => {
  //         setItemTitle(item.title);
  //         // const itemImageUrl = item.imageUrl;
  //         // const itemNewProduct = item.newProduct;
  //         // const itemButtonText = item.buttonText;
  //         // const itemDescription = item.description;
  //       });
  //     }
  //   });
  // }, []);

  // console.log('pathname', category);
  {
    // console.log(content.categories[0].items);
  }
  return (
    // <>
    <section className={styles.wrapper}>
      {/* <div>
          <div>
            loremloremloremloremloremloremloremloremloremloremloremloremlorem
          </div>
          <div>{itemTitle}</div>
           <div>{itemImageUrl}</div>
        <div>{itemNewProduct}</div>
        <div>{itemButtonText}</div>
        <div>{itemDescription}</div>
        </div> */}

      <Typography
        variant="h4"
        fontWeight="bold"
        color="light"
        className={styles.category}
      >
        {activeCategory.title}
      </Typography>

      {activeCategory.items.map((item, index) => (
        <div key={index} className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src={item.imageUrl}
              alt={item.title}
              className={styles.heroImage}
              priority
              width="90"
              height="90"
            />
          </div>
          {item.newProduct && (
            <Typography
              color="primary"
              textAlign="center"
              variant="overline"
              className={styles.title}
            >
              New Product
            </Typography>
          )}
          <Typography
            variant="h3"
            fontWeight="bold"
            color="text-color-light"
            className={styles.title}
          >
            {item.title.trim()}
          </Typography>
          <Typography
            variant="body"
            color="text-color-light"
            className={styles.description}
          >
            {item.description.trim()}
          </Typography>
          <Button className={styles.button}>{item.buttonText}</Button>
        </div>
      ))}
      {/*
      {content.categories.items?.map((item) => (
        <ProductInfo
          key={item.slug}
          title={item.title}
          imageUrl={item.imageUrl}
          slug={item.slug}
        />
      ))} */}

      {/* <div className={styles.imageWrapper}>
        <Image
          // width={100}
          // height={100}
          src="/assets/shared/mobile/image-xx99-mark-two-headphones.jpg" // Default image for mobile
          alt="Card Image"
          className={styles.heroImage}
          // layout="responsive"
          priority
          objectFit="cover"
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
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </Typography>
        <Button className={classnames(styles.button, 'variant-primary')}>
          See Product
        </Button>
      </div> */}
      <ProductCategories />
    </section>
    // </>
  );
};

export default ProductCategory;
