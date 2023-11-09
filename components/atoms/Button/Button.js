import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({
  children,
  className,
  onClick,
  ariaLabel,
  type = 'button',
  variant = 'primary', // 'primary' corresponds to 'See Product' in design system
  disabled = false,
  ...props
}) => {
  // Combine the base class 'button' with any additional classes
  const classNames = classnames(styles.button, className, {
    [styles[`variant-${variant}`]]: variant, // Variant classes for different button types
    [styles.disabled]: disabled,
  });

  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      aria-label={ariaLabel}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
