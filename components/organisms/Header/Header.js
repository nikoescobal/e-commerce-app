// components/Header/Header.js
import styles from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Navigation Menu */}
      <div className={styles.menuIcon}>
        <Image
          src="/assets/icons/icon-hamburger.svg"
          alt="Menu Icon"
          width={24}
          height={24}
          layout="responsive"
        />
      </div>

      {/* Logo */}
      <div className={styles.logo}>
        <Image
          src="/assets/icons/logo.svg"
          alt="Logo"
          width={10}
          height={10}
          layout="responsive"
        />
      </div>

      {/* Cart Icon */}
      <div className={styles.cartIcon}>
        <Image
          src="/assets/icons/icon-cart.svg"
          alt="Cart Icon"
          width={24}
          height={24}
          layout="responsive"
        />
      </div>
    </header>
  );
};

export default Header;
