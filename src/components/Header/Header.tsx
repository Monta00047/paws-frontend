import type { FC } from 'react';
import { useState, useEffect } from 'react';
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

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest(`.${styles.header}`)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('click', handleClickOutside);
      // Prevent body scroll when menu is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <img className={styles.logo} src={logo} alt="Logo" onClick={closeMenu} />

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
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
      >
        <img
          className={styles.menu}
          src={menu}
          alt="Menu"
          style={{
            transform: isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>
    </div>
  );
};

export default Header;
