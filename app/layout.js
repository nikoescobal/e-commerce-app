import './globals.css';
import { Manrope } from 'next/font/google';

// components
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import AboutUsMini from '../components/organisms/AboutUsMini/AboutUsMini';
// import { CartProvider } from '../context/CartContext';
// import styles from '../components/organisms/Header/Header.module.scss';

const manrope = Manrope({ subsets: ['latin'] });

export const metadata = {
  title: 'Audiophile',
  description: 'Audio focused E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <Header />
        {children}

        <AboutUsMini />
        <Footer />
      </body>
    </html>
  );
}
