// atoms/Image/Image.js
import NextImage from 'next/image';

const Image = ({ src, alt, layout, ...props }) => {
  // Determine if the source is an SVG, and handle accordingly
  const isSVG = src.includes('.svg');
  const imageProps = isSVG ? {} : { layout: layout || 'fill' };

  return <NextImage src={src} alt={alt} {...imageProps} {...props} />;
};

export default Image;
