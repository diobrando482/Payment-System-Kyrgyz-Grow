import React from 'react'
import styles from './explain.module.css'
import img from '../../../assets/1.2.3.png'
const Explain = () => {
  return (
    <div className={styles.Explain}>
        <h1>
            Как это работает?
        </h1>
        <p>
        С нашей интуитивно понятной системой вы <br /> можете легко интегрировать онлайн-платежи на <br />   ваш сайт всего в три простых шага. 
        </p>
        <div className={styles.imgContainer}>
            <img className={styles.img} src={img} alt="" />
        </div>
        <div className={styles.container}>
            <div>
                <h3>
                    Зарегестрируйтесь
                </h3>
                <p>
                    Пройдите быструю и простую <br /> регистрацию на нашей <br /> платформе.
                </p>
            </div>
            <div>
                <h3>
                    Настройте параметры.
                </h3>
                <p>
                    Настройте платежные <br /> параметры в соответствии с <br /> потребностями.
                </p>
            </div>
            <div>
                <h3>
                    Начните пользоваться!
                </h3>
                <p>
                    Запустите ваш сайт и начните <br /> принимать платежи от <br /> клиентов.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Explain