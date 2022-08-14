import React from 'react';
import styles from './Product-title.module.css'

function ProductTitle(props) {

    return (
        <>
           <span className={styles.text}>{props.title}</span>
        </>
    );
}

export default ProductTitle;