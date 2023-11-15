// // components/molecules/CategoryCard/CategoryCard.js
// import React from 'react';
// import styles from './CategoryCard.module.scss';
// // import Image from '../../atoms/Image/Image';
// import classnames from 'classnames';
// import ButtonWithIcon from '../../atoms/ButtonWithIcon/ButtonWithIcon';
// import Image from '../../atoms/Image/Image';

// const CategoryCard = ({ title, imageUrl, slug }) => {
//   // Define additional class names as needed
//   const cardClass = classnames(styles.categoryCard);

//   return (
//     <div className={cardClass}>
//       <div className={styles.imageWrapper}>
//         <Image src={imageUrl} alt={title} width={150} height={150} />
//       </div>
//       <div className={styles.content}>
//         <h6 className={styles.title}>{title.toUpperCase()}</h6>
//         <ButtonWithIcon
//           className={styles.shopButton}
//           iconSrc="/assets/icons/icon-arrow-right.svg"
//           iconAlt="Right Arrow"
//           iconWidth={24} // Width of the icon in pixels
//           iconHeight={24} // Height of the icon in pixels
//         >
//           SHOP
//         </ButtonWithIcon>
//       </div>
//     </div>
//   );
// };

// export default CategoryCard;

import React from 'react';
import styles from './CategoryCard.module.scss';
import Image from '../../atoms/Image/Image';
import ButtonWithIcon from '../../atoms/ButtonWithIcon/ButtonWithIcon';
import Typography from '../../atoms/Typography/Typography';

const CategoryCard = ({ title, imageUrl }) => {
  return (
    <div className={styles.categoryCard}>
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={title} width={96} height={96} />
      </div>
      <div className={styles.cardContent}>
        <Typography
          color="text-color-dark"
          fontWeight="bold"
          textAlign="center"
          variant="h6"
          className={styles.title}
        >
          {title.toUpperCase()}
        </Typography>
        <ButtonWithIcon
          className={styles.shopButton}
          iconSrc="/assets/icons/icon-arrow-right.svg"
          iconAlt="Right Arrow"
          iconWidth={18} // Width of the icon in pixels
          iconHeight={18} // Height of the icon in pixels
        >
          SHOP
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default CategoryCard;
