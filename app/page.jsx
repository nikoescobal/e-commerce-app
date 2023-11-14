import styles from './page.module.css';
import Header from '../components/organisms/Header/Header';
import Hero from '../components/organisms/Hero/Hero';
import ProductCategories from '../components/organisms/ProductCategories/ProductCategories';

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProductCategories />
    </main>
  );
}
