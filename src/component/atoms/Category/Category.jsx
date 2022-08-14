import React from 'react';
import styles from './Category.module.css'

export const Category = ({text}) =>{
    return (
        <div>
            <p className={styles.text}>{text}</p>
        </div>
    );

}
