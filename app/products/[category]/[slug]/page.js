// 'use client';
// import React from 'react';
// import styles from './details.module.scss';
// import { usePathname } from 'next/navigation';
// import Image from '../../../../components/atoms/Image/Image';
// import Button from '../../../../components/atoms/Button/Button';
// import Typography from '../../../../components/atoms/Typography/Typography';
// import classnames from 'classnames';
// import ProductCategories from '../../../../components/organisms/ProductCategories/ProductCategories';
// import content from './content';
// import { useState, useEffect } from 'react';
// import ProductCard from '../../../../components/molecules/ProductCard/ProductCard';
// import ProductList from '../../../../components/organisms/ProductList/ProductList';

// const ProductDetails = ({ params }) => {
//   const id = params.id;
//   console.log('🚀 ~ file: page.js:17 ~ ProductDetails ~ id:', id);
//   const pathname = usePathname();

//   // How to build details page step by step
//   // Step 1: Add link to see Product button on categories page
//   // Step 2: Redirect user to the correct product details
//   // Step 3: Display correct content based on content.js
//   // Step 4:

//   return (
//     <section className={styles.wrapper}>
//       <Typography
//         variant="h4"
//         fontWeight="bold"
//         color="light"
//         className={styles.category}
//       >
//         {id}lol
//       </Typography>
//     </section>
//   );
// };

// export default ProductDetails;
'use client';

import React from 'react';
import styles from './details.module.scss';
// Import useSearchParams
import { usePathname, useSearchParams } from 'next/navigation';
import Image from '../../../../components/atoms/Image/Image';
import Button from '../../../../components/atoms/Button/Button';
import Typography from '../../../../components/atoms/Typography/Typography';
import classnames from 'classnames';
import ProductCategories from '../../../../components/organisms/ProductCategories/ProductCategories';
import content from './content';
import { useState, useEffect } from 'react';
import ProductCard from '../../../../components/molecules/ProductCard/ProductCard';
import ProductList from '../../../../components/organisms/ProductList/ProductList';

const ProductDetails = () => {
  const pathname = usePathname();
  console.log('🚀 ~ file: page.js:59 ~ ProductDetails ~ pathname:', pathname);
  const segments = pathname.split('/');
  console.log('🚀 ~ file: page.js:61 ~ ProductDetails ~ segments:', segments);
  // Assuming the URL structure is /products/[category]/[slug]
  const category = segments[2];
  console.log('🚀 ~ file: page.js:64 ~ ProductDetails ~ category:', category);
  const slug = segments[3];
  console.log('🚀 ~ file: page.js:66 ~ ProductDetails ~ slug:', slug);

  return (
    <section className={styles.wrapper}>
      <Typography
        variant="h4"
        fontWeight="bold"
        color="light"
        className={styles.category}
      >
        {/* {id ? id : 'Loading...'} */}
      </Typography>
    </section>
  );
};

export default ProductDetails;
