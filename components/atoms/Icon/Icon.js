// atoms/Icon/Icon.js
import Image from '../Image/Image';

const Icon = ({ src, alt, width, height, ...props }) => {
  return <Image src={src} alt={alt} width={width} height={height} {...props} />;
};

export default Icon;
