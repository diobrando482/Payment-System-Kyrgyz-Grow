import React from 'react';
import styles from './main.module.css';
import image from '../../../assets/Hero.png'


const Main = () => {
    return (
      <main className={styles.mainContainer}>
        <div className={styles.textImageContainer}>
          <div className={styles.textContainer}>
            <h1 className={styles.title}>Легкие и безопасные онлайн-платежи</h1>
            <h2 className={styles.subtitle}>ОНЛАЙН-ПЛАТЕЖИ</h2>
            <p className={styles.description}>
              Миллионы компаний всех размеров используют Наш сервис онлайн и лично для приема платежей, отправки выплат, автоматизации финансовых процессов и увеличения доходов.
            </p>
            <button className={styles.startButton}>Начать сейчас</button>
          </div>
          <img src={image} alt="Скриншот приложения" className={styles.image} />
        </div>
      </main>
    );
  };
  
  export default Main;