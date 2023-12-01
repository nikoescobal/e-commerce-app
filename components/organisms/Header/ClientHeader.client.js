// components/organisms/Header/ClientHeader.client.js
import React, { useState } from 'react';
import Image from '../../atoms/Image/Image';
import ProductCategories from '../ProductCategories/ProductCategories';
import styles from './Header.module.scss';
import content from './content';
import Link from 'next/link';
import Typography from '../../atoms/Typography/Typography';

const ClientHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggles the state of the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Closes the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        <Image
          src={content.menuIcon.src}
          alt={content.menuIcon.alt}
          width={content.menuIcon.width}
          height={content.menuIcon.height}
        />
      </div>

      {isMenuOpen && (
        <div className={styles.overlay} onClick={closeMenu}>
          <div className={styles.dropdownMenu}>
            <ProductCategories />
          </div>
        </div>
      )}

      <ul className={styles.navList}>
        {content.navItems.map((navItem, index) => (
          <li key={index} className={styles.navItem}>
            <Link onClick={toggleMenu} href={navItem.path}>
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientHeader;
