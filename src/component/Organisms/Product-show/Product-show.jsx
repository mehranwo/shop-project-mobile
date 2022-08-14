import React from 'react';
import Card from '../../Molecules/Card/Card'
import styles from './Product-show.module.css'


function ProductShow(props) {
   
    return (
        <section className={styles.productShow}>
            {props.data.map((item , index)=>{
                localStorage.setItem(index,{item})
                return(
                <Card src= {item.src} data = {item} sendDataToCardPage={props.sendDataToCardPage} favourite={props.favourite} />
                )
            })}
        </section>
    );
}

export default ProductShow;