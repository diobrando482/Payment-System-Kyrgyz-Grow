import React from 'react';
import styles from './Header.module.css';


const Header = () => {
    return (
      <header className={styles.headerContainer}>
        <div className={styles.logo}>Logo</div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Главная</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>О нас</a></li>
            <li className={styles.navItem}><a href="#" className={styles.navLink}>Контакты</a></li>
          </ul>
          <button className={styles.loginButton}>Войти</button>
        </nav>
      </header>
    );
  };
  
  export default Header;