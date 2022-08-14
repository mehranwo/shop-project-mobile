import React , {useState} from 'react';
import Icon from '../../atoms/Icon/Icon'
import {BsHeart} from 'react-icons/bs'
import ProductPrize from '../../atoms/Product-prize/Product-prize'
import ProductImage from '../../atoms/Product-image/Product-image'
import ProductTitle from '../../atoms/Product-title/Product-title'
import styles from './Card.module.css'


function Card(props) {
    const [data , setData] = useState()
    return (
        <section className={styles.card} key={props.data.id} >
            <div className={styles.pruductImage} onClick={()=>props.sendDataToCardPage({...props.data,src: props.src})}>
                <ProductImage src={props.src}/>
            </div>
            <div className={styles.detail}>
                <div className={styles.text}>
                    <ProductTitle  title={props.data.title}/>
                    <ProductPrize  prize={props.data.prize}/>
                </div>
                <div className={styles.icon} onClick={()=>props.favourite(props.data)}>
                    <Icon icon={<BsHeart/>} favourite={props.data.favourite}/>
                </div>

            </div>

        </section>
    );
}

export default Card;