import styles from './page.module.css';
import RootLayout from './layout';
import Header from '../components/organisms/Header/Header';

export default function Home() {
  return (
    <RootLayout>
      <main className={styles.main}>
        <Header />
      </main>
    </RootLayout>
  );
}
