import React from 'react';
import styles from './counters.module.css'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; Code Articles 2023</p>
      <nav>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact Us</a>
      </nav>
    </footer>
  );
};

export default Footer;
