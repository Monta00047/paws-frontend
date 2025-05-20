import type { FC } from 'react';
import styles from './Hero.module.scss';
import BG from '../../../assets/images/home/BG.png';
import type { IHero } from '../../../types/home/hero';
import Button from '../../Button/Button';
const Hero: FC<IHero> = ({ data }) => {
  const { button, title, subtitle, description } = data;
  const { href, label, variant } = button;
  return (
    <div className={styles.hero}>
      <img src={BG} className={styles.bg} alt="" />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <div className={styles.description}>{description}</div>
        <Button className={styles.button} href={href} variant={variant}>
          {label}
        </Button>
      </div>
    </div>
  );
};

export default Hero;
