import React from 'react'
import styles from './Cards.module.css'
import {IoIosArrowDroprightCircle} from 'react-icons/io'
const Cards = ({image, title,url}) => {
  return (
    <li>
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles['card-overlay']}>
                <div className={styles['card-header']}>
                    <IoIosArrowDroprightCircle size={45} className={styles['card-icon']}/>
                    <div className={styles['card-content']}>
                        <h3 className={styles['card-title']}>{title}</h3>
                        <a href={url}>Demo</a>
                    </div>
                </div>
                <p className={styles['card-description']}>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam illum modi exercitationem, quae nesciunt earum asperiores, quis optio cupiditate labore dolores non nisi eaque dolorum officiis aspernatur possimus ab sint?
                </p>
            </div>
        </div>
    </li>
  )
}

export default Cards