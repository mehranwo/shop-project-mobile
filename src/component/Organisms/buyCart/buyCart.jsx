import React from 'react';
import styles from './buyCart.module.css'
import Icon from '../../atoms/Icon/Icon'
import {BsCheckSquareFill} from 'react-icons/bs'

function BuyCart(props) {
    return (
        <div className={styles.buyCart}>
            {typeof props.data == 'String' && window.alert(props.date)}
            <div className={styles.image}>
                <img src={props.data.src} className={styles.img}/>
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    {props.data.title}
                </div>
                <div className={styles.detail}>
                    {props.data.detail}
                </div>
                <div className={styles.prize}>
                    {props.data.prize}
                </div>
            </div>
            <div className={styles.icons}>
                <Icon icon={<BsCheckSquareFill/>} active={'active'}/>
                <div className={styles.number}>
                    <button className={styles.increase} onClick={()=>props.increase(props.data)}>+</button>
                    <div className={styles.count}>{props.data.count}</div>
                    <button className={styles.decrease} onClick={()=>props.decrease(props.data)}>-</button>
                </div>

            </div>
        </div>
    );
}

export default BuyCart;