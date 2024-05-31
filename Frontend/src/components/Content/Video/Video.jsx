import React from 'react'
import styles from './video.module.css'
import fakeVideo from '../../../assets/Video.png'
const Video = () => {
  return (
    <div className={styles.VideoContainer}>
        <div>
        <img src={fakeVideo} alt="" />
        </div>
        <div>
            
        </div>
    </div>
  )
}

export default Video