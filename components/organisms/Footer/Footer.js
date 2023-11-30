import React from 'react';
import Image from '../../atoms/Image/Image';
import styles from './Footer.module.scss';
import content from './content';
import Link from 'next/link';
import Typography from '../../atoms/Typography/Typography';

const Footer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.border}></div>
      <div className={styles.footerTop}>
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
              <Typography
                fontWeight="bold"
                color="light"
                variant="subtitle"
                className={styles.navLink}
              >
                {navItem.label}
              </Typography>
            </Link>
          ))}
        </nav>
      </div>

      <Typography
        color="light"
        variant="body"
        fontWeight="medium"
        className={styles.description}
      >
        {content.description}
      </Typography>
      <div className={styles.footerBottom}>
        <Typography
          variant="body"
          color="light"
          fontWeight="bold"
          className={styles.copyright}
        >
          {content.copyright}
        </Typography>
        {/* <ul className={styles.socialMedia}>
      <Image src=></Image>
        <div>c</div>
        <div>c</div>
      </ul> */}
        <ul className={styles.socialMedia}>
          {content.socialMediaLinks.map((link, index) => (
            <li key={index}>
              <a
                className={styles.iconWrapper}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={link.icon} alt={link.name} width={24} height={24} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Footer;
