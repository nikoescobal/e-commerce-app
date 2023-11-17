// atoms/Image/Image.js
import NextImage from 'next/image';
import cn from 'classnames';
import styles from './Image.module.scss';

const Image = ({ src, alt, srcSet, sizes, layout, className, ...props }) => {
  const isSVG = src.includes('.svg');

  // Combine custom class names with the SVG class conditionally
  const imageClass = cn({
    [styles.svgImage]: isSVG,
    [className]: className,
  });

  // Include srcSet and sizes in imageProps if they are provided
  const imageProps = {
    ...(isSVG ? {} : { layout: layout || 'fill' }),
    ...(srcSet && { srcSet }),
    ...(sizes && { sizes }),
  };

  return (
    <div className={imageClass}>
      <NextImage src={src} alt={alt} {...imageProps} {...props} />
    </div>
  );
};

export default Image;
