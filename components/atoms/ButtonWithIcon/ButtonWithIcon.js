// components/ButtonWithIcon/ButtonWithIcon.js
import React from 'react';
import Link from 'next/link';
import Button from '../Button/Button';
import Icon from '../Icon/Icon';
import Image from '../Image/Image';
import styles from './ButtonWithIcon.module.scss';

const ButtonWithIcon = ({
  children,
  className,
  href = '', // Add href prop for navigation
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
    <Link href={href} passHref>
      {/* Add Link component for navigation */}
      <Button
        as="a" // Render Button as an anchor tag
        type={type}
        className={className}
        aria-label={ariaLabel}
        variant={variant}
        disabled={disabled}
        {...props}
      >
        <span className={styles.text}>{children}</span>
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
    </Link>
  );
};

export default ButtonWithIcon;
