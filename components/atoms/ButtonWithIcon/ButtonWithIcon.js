// components/ButtonWithIcon/ButtonWithIcon.js
import React from 'react';
import Button from '../Button/Button';
import Icon from '../Icon/Icon'; // Adjust the import path as needed
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
      {iconSrc && <Icon src={iconSrc} alt={iconAlt} className={styles.icon} />}
    </Button>
  );
};

export default ButtonWithIcon;
