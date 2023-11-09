// molecules/Menu/Menu.js
import { useState } from 'react';
import Icon from '../../atoms/Icon/Icon';
import styles from './Menu.module.scss'; // you'll need to create the corresponding SCSS file

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.container}>
      <Icon
        src="/path-to-hamburger-icon.svg"
        alt="Menu"
        width={24}
        height={24}
        onClick={toggleMenu}
      />
      <div className={isOpen ? styles.menuOpen : styles.menuClosed}>
        {/* Menu items */}
      </div>
    </nav>
  );
};

export default Menu;
