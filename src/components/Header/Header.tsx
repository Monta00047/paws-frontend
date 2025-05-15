import type { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/header/logo.svg';
import Button from '../Button/Button';
const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img src={logo} alt="" />
      <div className={styles.navlinks}>
        <a className={styles.link} href="">
          Home
        </a>
        <a className={styles.link} href="">
          Services
        </a>
        <a className={styles.link} href="">
          Appointment
        </a>
        <a className={styles.link} href="">
          About us
        </a>
        <a className={styles.link} href="">
          Blog
        </a>
      </div>
      <Button href="#" variant="tertiary">
        Contact Us
      </Button>
    </div>
  );
};

export default Header;
