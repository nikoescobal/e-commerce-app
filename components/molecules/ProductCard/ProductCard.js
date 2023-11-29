// // /components/ProductCard/ProductCard.jsx
// import React from 'react';
// import classnames from 'classnames';
// import Image from '../../atoms/Image/Image';
// import Typography from '../../atoms/Typography/Typography';
// import Button from '../../atoms/Button/Button';
// import styles from './ProductCard.module.scss';

// const ProductCard = ({ product }) => {
//   const layoutClass = styles[product.layout] || styles.default;

//   return (
//     <article className={`${styles.productCard} ${layoutClass}`}>
//       <div className={styles.imageWrapper}>
//         <Image
//           src={product.image}
//           alt={product.name}
//           layout="responsive"
//           height={3}
//           width={3}
//         />
//       </div>
//       <div className={styles.details}>
//         <Typography variant="h2" className={styles.title} color="light">
//           {product.name}
//         </Typography>
//         <Typography variant="body" color="light">
//           {product.description}
//         </Typography>
//         <Button variant="primary">{product.buttonText}</Button>
//       </div>
//     </article>
//   );
// };

// export default ProductCard;

// ProductCard.jsx
import React from 'react';
import classnames from 'classnames';
import Image from '../../atoms/Image/Image';
import Button from '../../atoms/Button/Button';
import Typography from '../../atoms/Typography/Typography';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product, type }) => {
  // Dynamically set class names based on the card type
  const cardClasses = classnames(styles.productCard, {
    [styles.featured]: type === 'featured',
    [styles.standard]: type === 'standard',
    [styles.split]: type === 'split',
  });

  const buttonVariant = type === 'featured' ? 'primary' : 'secondary';

  return (
    <div className={cardClasses}>
      {type === 'featured' && (
        <Image
          src="/assets/images/home/desktop/pattern-circles.svg"
          alt=""
          className={styles.circlePattern}
          fill={true}
          objectFit="cover"
          // layout="responsive"
          // width={100}
          // height={100}
        />
      )}
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.name}
          width={10}
          height={10}
          layout="responsive"
        />
      </div>
      <div className={styles.content}>
        <Typography variant="h2" color="light">
          {product.title}
        </Typography>
        {product.description && (
          <Typography variant="body" color="light">
            {product.description}
          </Typography>
        )}
        <Button className={styles.button} variant={buttonVariant}>
          {product.buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
