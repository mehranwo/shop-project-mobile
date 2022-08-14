import React from 'react';
import styles from './Product-prize.module.css'

function ProductPrize(props) {

    return (
        <>
            <span className={styles.text}>{props.prize}</span>
        </>
    );
}

export default ProductPrize;