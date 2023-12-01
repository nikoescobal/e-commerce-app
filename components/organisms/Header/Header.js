// components/Header/Header.js
'use client';

import React, { useState } from 'react';
import styles from './Header.module.scss';
import Image from '../../atoms/Image/Image';
import content from './content';
import Link from 'next/link';
import ProductCategories from '../ProductCategories/ProductCategories';
import ClientHeader from './ClientHeader.client';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Client-Side Interactive Header */}
        <ClientHeader />

        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src={content.logo.src}
            alt={content.logo.alt}
            width={content.logo.width}
            height={content.logo.height}
          />
        </div>

        {/* Cart Icon */}
        <div className={styles.cartIcon}>
          <Image
            src={content.cartIcon.src}
            alt={content.cartIcon.alt}
            width={content.cartIcon.width}
            height={content.cartIcon.height}
          />
        </div>
      </nav>

      <div className={styles.border}></div>
    </header>
  );
};

export default Header;
