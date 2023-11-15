import NextImage from 'next/image';
import cn from 'classnames';
import styles from './Image.module.scss'; // Assuming you have a corresponding SCSS file

const Image = ({ src, alt, layout, className, ...props }) => {
  const isSVG = src.includes('.svg');

  // Combine custom class names with the SVG class conditionally
  const imageClass = cn({
    [styles.svgImage]: isSVG,
    [className]: className,
  });

  const imageProps = isSVG ? {} : { layout: layout || 'fill' };

  return (
    <div className={imageClass}>
      <NextImage src={src} alt={alt} {...imageProps} {...props} />
    </div>
  );
};

export default Image;
