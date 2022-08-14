import React from 'react';
import styles from './Banner-sale.module.css'
import banner from '../../../asset/banner.png'


function BannerSale(props) {
    return (
        <div className={styles.banner}>
            <div className={styles.image}>
                <img src={banner} className={styles.img} />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    Big Sale
                </div>
                <div className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt nihil corrupti culpa vel aperiam
                </div>
            </div>

        </div>
    );
}

export default BannerSale;