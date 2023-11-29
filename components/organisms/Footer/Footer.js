import React from 'react';
import Image from '../../atoms/Image/Image';
import styles from './Footer.module.scss';
import content from './content';
import Link from 'next/link';

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.border}></div>
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={100}
          height={100}
        />
      </div>
      <nav className={styles.navItems}>
        {content.navItems.map((navItem, index) => (
          <Link key={index} href={navItem.path}>
            {/* Apply styles directly to Link since we're not using <a> */}
            <span className={styles.navLink}>{navItem.label}</span>
          </Link>
        ))}
      </nav>
      <div className={styles.description}>{content.description}</div>
      <div className={styles.description}>{content.copyright}</div>
    </section>
  );
};

export default Footer;
