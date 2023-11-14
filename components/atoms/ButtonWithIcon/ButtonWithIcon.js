// components/ButtonWithIcon/ButtonWithIcon.js
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon'; // Adjust the import path as needed
import Image from '../Image/Image';
import styles from './ButtonWithIcon.module.scss';

const ButtonWithIcon = ({
  children,
  className,
  onClick,
  ariaLabel,
  type = 'button',
  variant = 'primary',
  disabled = false,
  iconSrc,
  iconAlt,
  iconWidth,
  iconHeight,
  ...props
}) => {
  return (
    <Button
      type={type}
      className={className}
      onClick={onClick}
      aria-label={ariaLabel}
      variant={variant}
      disabled={disabled}
      {...props}
    >
      {children}
      {iconSrc && (
        <Image
          src={iconSrc}
          alt={iconAlt}
          width={iconWidth}
          height={iconHeight}
          className={styles.icon}
        />
      )}
    </Button>
  );
};

export default ButtonWithIcon;
