import type { FC } from 'react';
import type { IBestCare } from '../../../types/home/bestCare';
import Button from '../../Button/Button';
import styles from './BestCare.module.scss';
// import BG from '../../../assets/images/home/bestCareBG.png';
import pattern from '../../../assets/images/home/bestCarePattern.png';
const BestCare: FC<IBestCare> = ({ data }) => {
  const { title, subtitle, button } = data;
  const { href, label, variant } = button;
  return (
    <div className={styles.bestCare}>
      <img className={styles.pattern} src={pattern} alt="" />
      <div className={styles.content}>
        <div className={styles.title}>{title}</div>
        <div className={styles.subtitle}>{subtitle}</div>
        <Button className={styles.button} href={href} variant={variant}>
          {label}
        </Button>
      </div>
    </div>
  );
};

export default BestCare;
