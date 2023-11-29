import './globals.css';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import AboutUsMini from '../components/organisms/AboutUsMini/AboutUsMini';
// import styles from '../components/organisms/Header/Header.module.scss';

export const metadata = {
  title: 'Audiophile',
  description: 'Audio focused E-commerce',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <AboutUsMini />
        <Footer />
      </body>
    </html>
  );
}
