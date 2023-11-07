// components/atoms/Icons/Icon.js
import React from 'react';
import classnames from 'classnames';
import styles from './Icon.module.scss';

const Icon = ({ name, label, className }) => {
  // Dynamically import the SVG component
  const SvgIcon = require(`assets/icons/${name}.js`).default;

  return (
    <span
      className={classnames(styles.icon, className)}
      aria-label={label}
      role="img"
    >
      <SvgIcon />
    </span>
  );
};

export default Icon;
