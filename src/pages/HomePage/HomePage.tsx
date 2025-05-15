import type { FC } from 'react';
import Hero from '../../components/Home/Hero/Hero';
import styles from './HomePage.module.scss';
const HomePage: FC = () => {
  return (
    <div className={styles.homepage}>
      <Hero />
    </div>
  );
};

export default HomePage;
