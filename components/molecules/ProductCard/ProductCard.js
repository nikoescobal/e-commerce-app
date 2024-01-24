'use client';

// components/molecules/ProductCard/ProductCard.js
import React from 'react';
import Image from '../../atoms/Image/Image';
import styles from './ProductCard.module.scss';
import Typography from '../../atoms/Typography/Typography';
import Button from '../../atoms/Button/Button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';
// import Dialog from '../Dialog/Dialog';

const ProductCard = ({
  item,
  hasAddToCart,
  hasSeeProduct,
  isDetailedView,
  price,
  addToCart,
}) => {
  const cardClass = classNames(styles.wrapper, {
    [styles.detailed]: isDetailedView,
  });

  const addToCartFunction = (item) => {};

  async function onClose() {
    // 'use server';
    console.log('modal has closed');
  }

  async function onOk() {
    // 'use server';
    console.log('Ok was clicked');
  }

  const id = item.id;
  const pathname = usePathname();
  return (
    <div className={cardClass}>
      <picture className={styles.categoryImage}>
        <source media="(min-width: 1024px)" srcSet={item.imageUrl.desktop} />
        <source media="(min-width: 768px)" srcSet={item.imageUrl.tablet} />
        <img
          src={item.imageUrl.mobile}
          alt={item.title.trim()}
          className={styles.heroImage}
        />
      </picture>

      <div className={styles.content}>
        {item.newProduct && (
          <Typography
            color="primary"
            variant="overline"
            className={styles.newProductLabel}
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
        {isDetailedView && (
          <>
            <Typography variant="h6" className={styles.price}>
              ${item.price}
            </Typography>
            <div className={styles.addToCartWrapper}>
              <div className={styles.counterWrapper}>
                <button className={styles.operatorButton}>-</button>
                {/* <input type="number" className={styles.counter} /> */}
                <div type="number" className={styles.counter}>
                  1
                </div>
                <button className={styles.operatorButton}>+</button>
              </div>
              {/* <Button
                className={styles.addToCartButton}
                onClick={() => setOpenModal(true)}
              >
                Add to Cart
              </Button> */}
              <Button
                className={styles.addToCartButton}
                onClick={() => setOpenModal(true)}
              >
                Add to Cart
              </Button>
            </div>
          </>
        )}
        <Link href={`${pathname}/${id}`}>
          {hasSeeProduct === true && (
            <Button className={styles.button}>{item.buttonSP}</Button>
          )}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
