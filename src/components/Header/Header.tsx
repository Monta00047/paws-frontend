import type { FC } from 'react';
import { useState } from 'react';
import styles from './Header.module.scss';
import logo from '../../assets/images/header/logo.svg';
import menu from '../../assets/icons/menu.svg';
import Button from '../Button/Button';

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="Logo" />

      <div className={`${styles.navlinks} ${isMenuOpen ? styles.open : ''}`}>
        <a className={styles.link} href="" onClick={closeMenu}>
          Home
        </a>
        <a className={styles.link} href="" onClick={closeMenu}>
          Services
        </a>
        <a className={styles.link} href="" onClick={closeMenu}>
          Appointment
        </a>
        <a className={styles.link} href="" onClick={closeMenu}>
          About us
        </a>
        <a className={styles.link} href="" onClick={closeMenu}>
          Blog
        </a>
      </div>

      <div className={`${styles.actions} ${isMenuOpen ? styles.open : ''}`}>
        <Button className={styles.button} href="#" variant="tertiary">
          Contact Us
        </Button>
      </div>

      <button
        className={styles.menuButton}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <img className={styles.menu} src={menu} alt="Menu" />
      </button>
    </div>
  );
};

export default Header;
