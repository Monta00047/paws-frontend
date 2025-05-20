import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { IHero } from '../../types/home/hero';
import type { IServices } from '../../types/home/services';
import Hero from '../../components/Home/Hero/Hero';
import styles from './HomePage.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import Services from '../../components/Home/Services/Services';

type HomePageApiResponse = {
  data: {
    hero: { data: IHero };
    services: { data: IServices };
  };
};

const HomePage: FC = () => {
  const [data, setData] = useState<HomePageApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const homePageData = data?.data;
  const { hero, services } = homePageData || {};

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
    <div className={styles.homepage}>
      {hero && <Hero data={hero} />}
      {services && <Services data={services} />}
    </div>
  );
};

export default HomePage;
