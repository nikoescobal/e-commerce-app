// atoms/Image/Image.js
import NextImage from 'next/image';

const Image = ({ src, alt, width, height, layout, objectFit, ...props }) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      layout={layout || 'responsive'}
      objectFit={objectFit || 'cover'}
      {...props}
    />
  );
};

export default Image;
