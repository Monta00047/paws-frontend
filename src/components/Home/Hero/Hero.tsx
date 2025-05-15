import type { FC } from 'react';
import styles from './Hero.module.scss';
import BG from '../../../assets/images/home/BG.png';
const Hero: FC = () => {
  return (
    <div className={styles.hero}>
      <img src={BG} className={styles.bg} alt="" />
    </div>
  );
};

export default Hero;
