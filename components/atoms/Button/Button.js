import React from 'react';
import classnames from 'classnames';
import styles from './Button.module.scss';

const Button = ({ children, className, onClick, ariaLabel, ...props }) => {
  return (
    <button
      className={classnames(styles.button, className)}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
