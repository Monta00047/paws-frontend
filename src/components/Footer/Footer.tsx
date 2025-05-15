import type { FC } from 'react';
import styles from './Footer.module.scss';
import logo from '../../assets/images/header/logo.svg';

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <img src={logo} alt="" />
        <div className={styles.description}>
          Compassionate care and expert services to keep your pets happy and
          healthy.
        </div>
        <div className={styles.copyright}>
          &#169; Copyright 2025 Paws & whiskers. All Right Reserved.
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.column}>
          <div className={styles.title}>Navigation</div>
          <div className={styles.element}>Home</div>
          <div className={styles.element}>Services </div>
          <div className={styles.element}>Appointment</div>
          <div className={styles.element}>About us </div>
          <div className={styles.element}>Blog</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
