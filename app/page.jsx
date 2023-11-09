import styles from './page.module.css';
import RootLayout from './layout';
import Header from '../components/organisms/Header/Header';
import Hero from '../components/organisms/Hero/Hero';

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <Header />
        <Hero />
      </main>
    </RootLayout>
  );
}
