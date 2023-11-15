// components/Header/Header.js
import styles from './Header.module.scss';
import cn from 'classnames';
import Image from '../../atoms/Image/Image';

const Header = ({ isBorderVisible }) => {
  // List of navigation items, this could also come from a prop or state
  const navItems = ['Headphones', 'Speakers', 'Earphones'];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Hamburger Icon */}
        <div className={styles.menuIcon}>
          <Image
            src="/assets/icons/icon-hamburger.svg"
            alt="Menu Icon"
            width={24}
            height={24}
          />
        </div>

        {/* Logo */}
        <div className={styles.logo}>
          <Image
            src="/assets/icons/logo.svg"
            alt="Logo"
            width={143}
            height={25}
          />
        </div>

        {/* Navigation Links */}
        {/* <ul className={styles.navList}>
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              {item}
            </li>
          ))}
        </ul> */}

        {/* Cart Icon */}
        <div className={styles.cartIcon}>
          <Image
            src="/assets/icons/icon-cart.svg"
            alt="Cart Icon"
            width={24}
            height={24}
          />
        </div>
      </nav>

      <div className={styles.border}></div>
    </header>
  );
};

export default Header;
