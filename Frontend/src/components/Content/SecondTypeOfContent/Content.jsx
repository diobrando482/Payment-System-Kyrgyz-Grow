import React from 'react'
import styles from './content.module.css'
import img from '../../../assets/SecondTwo.png'
const ContentTwo = () => {
  return (
    <div className={styles.ContentTwo}>
        <div className={styles.imageContainer}>
          <img className={styles.img} src={img} alt="" />
        </div>
        
        
        <div className={styles.text}>
          <h3 className={styles.tittle}>
            Полностью <br /> интегрированный набор <br /> платежных продуктов
          </h3>
          <p className={styles.description}>
            Мы объединяем все, что требуется для <br /> создания веб-сайтов и приложений, которые <br /> принимают платежи и отправляют выплаты <br /> по всему миру. Продукты Stripe позволяют<br /> осуществлять платежи онлайн и лично <br /> розничным продавцам, компаниям, <br /> занимающимся подпиской, программным <br />платформам  и маркетплейсам, а также всему, <br /> что находится между ними.
          </p>
        </div>

    </div>
  )
}
export default ContentTwo