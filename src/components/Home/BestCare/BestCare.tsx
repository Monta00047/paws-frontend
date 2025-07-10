import type { FC } from 'react';
import type { IBestCare } from '../../../types/home/bestCare';
import Button from '../../Button/Button';
import styles from './BestCare.module.scss';
import BGR from '../../../assets/images/home/bestCareBGR.png';
import pattern from '../../../assets/images/home/bestCarePattern.png';
import BR from '../../../assets/icons/home/bestCare/bottomLeft.svg';
import L from '../../../assets/icons/home/bestCare/left.svg';
import TL from '../../../assets/icons/home/bestCare/topLeft.svg';
import TR from '../../../assets/icons/home/bestCare/topRight.svg';
const BestCare: FC<IBestCare> = ({ data }) => {
  const { title, subtitle, button } = data;
  const { href, label, variant } = button;
  return (
    <div className={styles.bestCare}>
      <img src={BGR} className={styles.BGR} alt="background" />
      <img className={`${styles.BG} ${styles.BR}`} src={BR} alt="" />
      <img className={`${styles.BG} ${styles.L}`} src={L} alt="" />
      <img className={`${styles.BG} ${styles.TL}`} src={TL} alt="" />
      <img className={`${styles.BG} ${styles.TR}`} src={TR} alt="" />
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
