import { useEffect, useState } from 'react';
import type { FC } from 'react';
import type { IHero } from '../../types/home/hero';
import type { IServices } from '../../types/home/services';
import Hero from '../../components/Home/Hero/Hero';
import styles from './HomePage.module.scss';
import Spinner from '../../components/Spinner/Spinner';
import Services from '../../components/Home/Services/Services';
import Team from '../../components/Home/Team/Team';
import type { ITeam } from '../../types/home/team';
import type { IBestCare } from '../../types/home/bestCare';
import BestCare from '../../components/Home/BestCare/BestCare';

type HomePageApiResponse = {
  data: {
    hero: IHero['data'];
    services: IServices['data'];
    team: ITeam['data'];
    bestCare: IBestCare['data'];
  };
};

const HomePage: FC = () => {
  const [data, setData] = useState<HomePageApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const homePageData = data?.data;
  const { hero, services, team, bestCare } = homePageData || {};

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
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHomePageData();
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className={styles.homepage}>
        <div className={styles.error}>
          <h2>Something went wrong</h2>
          <p>{error}</p>
          <button onClick={fetchHomePageData}>Try Again</button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.homepage}>
      {hero && <Hero data={hero} />}
      {services && <Services data={services} />}
      {team && <Team data={team} />}
      {bestCare && <BestCare data={bestCare} />}
    </div>
  );
};

export default HomePage;
