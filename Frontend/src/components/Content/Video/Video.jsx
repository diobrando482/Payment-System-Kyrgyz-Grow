import React from 'react'
import styles from './video.module.css'
import fakeVideo from '../../../assets/Video.png'
import reviews from '../../../assets/reviews.png'
const Video = () => {
  return (
    <div className={styles.VideoContainer}>
        <div>
        <img src={fakeVideo} alt="" />
        </div>
        <div className={styles.reviews}>
            <h2 className={styles.tittle}>
            +1,749 команд поделились своим опытом <br /> использования нашего сервиса!
            </h2>
            <img src={reviews} alt="" />

            <div>
                <a href="">все отзывы →</a>
            </div>
        </div>
    </div>
  )
}

export default Video