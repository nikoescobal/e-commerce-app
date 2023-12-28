'use client';

import React, { useContext } from 'react';
import styles from './details.module.scss';
// Import useSearchParams
import { usePathname, useSearchParams } from 'next/navigation';
import Image from '../../../../components/atoms/Image/Image';
import Button from '../../../../components/atoms/Button/Button';
import Typography from '../../../../components/atoms/Typography/Typography';
import classnames from 'classnames';
import ProductCategories from '../../../../components/organisms/ProductCategories/ProductCategories';
import content from '../content';
import { useState, useEffect } from 'react';
import ProductCard from '../../../../components/molecules/ProductCard/ProductCard';
import ProductList from '../../../../components/organisms/ProductList/ProductList';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Modal from '../../../../components/molecules/Modal/Modal';
import { CartContext } from '../../../../components/cartContext';

const ProductDetailsPage = ({ params }) => {
  const { addToCart } = useContext(CartContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const id = params.slug;
  // const [activeCategory, setActiveCategory] = useState(null);
  const [product, setProduct] = useState({});
  const router = useRouter();
  const pathname = usePathname();
  // console.log('🚀 ~ file: page.js:59 ~ ProductDetails ~ pathname:', pathname);
  const segments = pathname.split('/');
  // console.log('🚀 ~ file: page.js:61 ~ ProductDetails ~ segments:', segments);
  // Assuming the URL structure is /products/[category]/[slug]
  const category = segments[2];
  // console.log('🚀 ~ file: page.js:64 ~ ProductDetails ~ category:', category);
  const slug = segments[3];
  console.log('🚀 ~ file: page.js:66 ~ ProductDetails ~ slug:', slug);

  useEffect(() => {
    // const categorySlugName = pathname.split('/').slice().pop();
    // const categorySlug = pathname.split('/').pop();
    // console.log(
    //   '🚀 ~ file: page.js:30 ~ useEffect ~ categorySlug:',
    //   categorySlug
    // );

    const foundCategory = content.categories.find((cat) =>
      cat.slug.endsWith(category)
    );

    const foundSlug = foundCategory.slug.split('/').pop();
    console.log('🚀 ~ file: page.js:86 ~ useEffect ~ foundSlug:', foundSlug);

    const foundProduct = foundCategory.items.find((product) => {
      console.log(
        '🚀 ~ file: page.js:89 ~ foundProduct ~ product:',
        product.id
      );
      return product.id === slug;
    });
    console.log(
      '🚀 ~ file: page.js:95 ~ foundProduct ~ foundProduct:',
      foundProduct
    );

    if (foundProduct) {
      setProduct(foundProduct);
    }
    // setActiveCategory(foundCategory);
  });

  // if (!activeCategory) {
  //   return <div>Loading...</div>;
  // }

  return (
    <section className={styles.wrapper}>
      <Modal isOpen={isModalOpen} onClose={toggleModal}>
        {/* Modal content goes here */}
      </Modal>
      {/* <Link href={router.back}>Go Back</Link> */}
      {Object.keys(product).length === 0 ? (
        <div>Loading...</div>
      ) : (
        <div>
          <Button className={styles.back} onClick={() => router.back()}>
            Go Back
          </Button>
          <ProductCard
            isDetailedView
            item={product}
            toggleModal={toggleModal}
            addToCart={addToCart}
          />

          {/* <div className={styles.cartWrapper}>
            <div className={styles.cartTop}>
              <div className={styles.cartCount}>3</div>
              <button>Remove all</button>
            </div>
            <div className={styles.cartItem}>
              <div className={styles.cartImage}>cart image</div>
              <div className={styles.cartInfo}>
                <div className={styles.cartTitle}>cart title</div>
                <div className={styles.cartPrice}>cart price</div>
              </div>
            </div>
          </div> */}
        </div>
      )}
      {/* <Typography
        variant="h4"
        fontWeight="bold"
        color="light"
        className={styles.category}
      >
        {id ? id : 'Loading...'}
      </Typography> */}
    </section>
  );
};

export default ProductDetailsPage;
