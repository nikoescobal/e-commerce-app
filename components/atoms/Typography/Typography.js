import React from 'react';
import classnames from 'classnames';
import styles from './Typography.module.scss';

const allowedTags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const Typography = ({
  variant = 'body',
  children,
  className,
  fontWeight = 'regular',
  color = 'dark',
  textAlign = 'inherit',
  size,
  ...props
}) => {
  const Tag = allowedTags.includes(variant) ? variant : 'p';

  // Generate class names from props and the corresponding SCSS modules.
  const classNames = classnames(
    styles[variant],
    styles[`font-weight-${fontWeight}`],
    styles[`text-color-${color}`],
    { [styles[`text-${textAlign}`]]: textAlign !== 'inherit' },
    { [styles[`size-${size}`]]: size },
    className
  );

  console.log('classes:', classNames);

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  );
};

export default Typography;
