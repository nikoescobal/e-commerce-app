// // // atoms/Image/Image.js
// // import NextImage from 'next/image';
// // import cn from 'classnames';
// // import styles from './Image.module.scss';

// // const Image = ({ src, alt, layout = 'responsive', className, ...props }) => {
// //   // Use the mobile image URL as the default src
// //   const defaultSrc = typeof src === 'object' ? src.mobile : src;

// //   return (
// //     <div className={cn(styles.svgImage, className)}>
// //       <NextImage src={defaultSrc} alt={alt} layout={layout} {...props} />
// //     </div>
// //   );
// // };

// // export default Image;

// // atoms/Image/Image.js
// // import NextImage from 'next/image';
// // import cn from 'classnames';
// // import styles from './Image.module.scss';

// // const Image = ({ src, alt, srcSet, sizes, layout, className, ...props }) => {
// //   // Include srcSet and sizes in imageProps if they are provided
// //   const imageProps = {
// //     ...(srcSet && { srcSet }),
// //     ...(sizes && { sizes }),
// //   };

// //   return (
// //     <div className={className}>
// //       <NextImage src={src} alt={alt} {...imageProps} {...props} />
// //     </div>
// //   );
// // };

// // export default Image;

// // atoms/Image/Image.js
// import NextImage from 'next/image';
// import cn from 'classnames';
// import styles from './Image.module.scss';

// const Image = ({
//   imageBasePath,
//   alt,
//   layout = 'responsive',
//   className,
//   ...props
// }) => {
//   // Generate image URLs for different device types
//   const mobileSrc = `${imageBasePath}-mobile.png`;
//   const tabletSrc = `${imageBasePath}-tablet.png`;
//   const desktopSrc = `${imageBasePath}-desktop.png`;

//   // Construct the srcSet string
//   const srcSet = `${mobileSrc} 640w, ${tabletSrc} 768w, ${desktopSrc} 1024w`;

//   return (
//     <div className={cn(styles.svgImage, className)}>
//       <NextImage
//         src={mobileSrc} // Default to mobile image
//         alt={alt}
//         srcSet={srcSet}
//         sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
//         layout={layout}
//         {...props}
//       />
//     </div>
//   );
// };

// export default Image;

import NextImage from 'next/image';
import cn from 'classnames';
import styles from './Image.module.scss';

const Image = ({
  imageUrl, // Can be a string or an object with mobile, tablet, and desktop properties
  alt,
  layout = 'responsive',
  className,
  ...props
}) => {
  let src, srcSet;

  // Check if imageUrl is a string or an object
  if (typeof imageUrl === 'string') {
    // If it's a string, use it as the src directly
    src = imageUrl;
  } else if (typeof imageUrl === 'object') {
    // If it's an object, construct src and srcSet
    src = imageUrl.mobile || ''; // Default to mobile image or empty string
    srcSet = [
      imageUrl.mobile ? `${imageUrl.mobile} 640w` : '',
      imageUrl.tablet ? `${imageUrl.tablet} 768w` : '',
      imageUrl.desktop ? `${imageUrl.desktop} 1024w` : '',
    ]
      .filter(Boolean)
      .join(', '); // Filter out any undefined or empty values
  }

  return (
    <div className={cn(styles.svgImage, className)}>
      <NextImage
        src={src}
        alt={alt}
        srcSet={srcSet || undefined} // Use srcSet if available, else undefined
        sizes="(max-width: 639px) 100vw, (max-width: 767px) 50vw, 33vw"
        layout={layout}
        {...props}
      />
    </div>
  );
};

export default Image;
