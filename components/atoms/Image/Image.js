// atoms/Image/Image.js
import NextImage from 'next/image';
import cn from 'classnames';
import styles from './Image.module.scss';

const Image = ({ src, alt, srcSet, sizes, layout, className, ...props }) => {
  // Include srcSet and sizes in imageProps if they are provided
  const imageProps = {
    ...(srcSet && { srcSet }),
    ...(sizes && { sizes }),
  };

  return (
    <div className={className}>
      <NextImage src={src} alt={alt} {...imageProps} {...props} />
    </div>
  );
};

export default Image;
