import type { FC } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/header/logo.svg';
import menu from '../../assets/icons/menu.svg';
import Button from '../Button/Button';
const Header: FC = () => {
  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="" />
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
      <Button className={styles.button} href="#" variant="tertiary">
        Contact Us
      </Button>
      <img className={styles.menu} src={menu} alt="" />
    </div>
  );
};

export default Header;
