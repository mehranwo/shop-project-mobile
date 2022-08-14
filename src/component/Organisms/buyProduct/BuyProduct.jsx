import React from 'react';
import Icon from '../../atoms/Icon/Icon'
import styles from './BuyProduct.module.css'
import {BiChevronLeftCircle} from 'react-icons/bi'
import {BsHeart} from 'react-icons/bs'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import data from '../../../data/products.json'

function BuyProduct(props) {
    return (
        <section className={styles.buyProduct}>
            <div className={styles.image}>
                <div className={styles.backIcon} onClick={()=>props.backToHome()}>
                    <Icon icon={<BiChevronLeftCircle/>}/>
                </div>
                <div className={styles.heartIcon} onClick={()=>props.favourite(props.data)}>
                    <Icon icon={<BsHeart/>} favourite={props.data.favourite}/>
                </div>
                <img src={props.data.src} className={styles.img}/>
            </div>

            <div className={styles.text}>
                <div className={styles.title}>
                    <div className={styles.names}>
                        <div className={styles.name}>{props.data.title}</div>
                        <div className={styles.detail}>{props.data.detail}</div>
                    </div>
                    <div className={styles.prize}>
                        {props.data.prize}
                    </div>
                </div>
                <div className={styles.description}>
                    {props.data.description}
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.buyNow} onClick={()=>props.addBuy(props.data)}>
                    Buy Now
                </button>
                <div className={styles.shopIcon} onClick={()=>props.goToBuyPage() }>
                    <Icon icon={<AiOutlineShoppingCart/>} dark={'dark'}/>
                </div>
            </div>




        </section>
    );
}

export default BuyProduct;