import React,{useState} from 'react';
import Icon from '../../component/atoms/Icon/Icon'
import styles from './BuyPage.module.css'
import Header from '../../component/Organisms/Header/Header'
import Footer from '../../component/Organisms/Footer/Footer'
import BuyCart from '../../component/Organisms/buyCart/buyCart'


function BuyPage(props) {
    const [products , setProduct] = useState([])
    return (
        <>
            <Header text={['Card']}/>
            <section>
                {props.storage.map((item)=>{
                    return(
                    <BuyCart data={item} increase={props.increase} decrease={props.decrease}/>
                    )
                })}
            </section>
            <Footer backToHome={props.backToHome}  />
        </>
    );
}

export default BuyPage;