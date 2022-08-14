import React from 'react';
import styles from './Product-image.module.css'


function ProductImage(props) {

    return (
        <div className={styles.div}>
            <img className={styles.img} src={props.src} />
        </div>
    );
}

export default ProductImage;