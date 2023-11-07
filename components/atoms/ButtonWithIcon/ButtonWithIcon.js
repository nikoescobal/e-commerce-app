// components/atoms/ButtonWithIcon/ButtonWithIcon.js
import React from 'react';
import Icon from '../Icons/Icon/Icon';

const ButtonWithIcon = ({ iconName, ariaLabel }) => {
  const handleClick = () => {
    // Handle the click event
  };

  return (
    <button aria-label={ariaLabel} onClick={handleClick}>
      <Icon name={iconName} label={ariaLabel} />
    </button>
  );
};

export default ButtonWithIcon;
