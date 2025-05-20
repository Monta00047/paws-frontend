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
          <a href="#" className={styles.element}>
            Home
          </a>
          <a href="#" className={styles.element}>
            Services{' '}
          </a>
          <a href="#" className={styles.element}>
            Appointment
          </a>
          <a href="#" className={styles.element}>
            About us{' '}
          </a>
          <a href="#" className={styles.element}>
            Blog
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
