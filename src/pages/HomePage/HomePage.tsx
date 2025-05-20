import { useEffect, useState } from 'react';
import type { FC } from 'react';
import Hero from '../../components/Home/Hero/Hero';
import styles from './HomePage.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import type { IHero } from '../../types/home/hero';

type HomePageApiResponse = {
  data: {
    hero: { data: IHero };
  };
};

const HomePage: FC = () => {
  const [data, setData] = useState<HomePageApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const homePageData = data?.data;
  const { hero } = homePageData || {};

  const fetchHomePageData = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_URL}/api/home-page?pLevel=5`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePageData();
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className={styles.homepage}>{hero && <Hero data={hero} />}</div>
  );
};

export default HomePage;
