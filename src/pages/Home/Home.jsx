import React , {useState,useEffect} from 'react';
import data from '../../data/products.json'
import Header from '../../component/Organisms/Header/Header'
import BannerBox from '../../component/Organisms/Banner-box/Banner-Box'
import ProductShow from '../../component/Organisms/Product-show/Product-show'
import Footer from '../../component/Organisms/Footer/Footer'
import styles from './Home.module.css'



export default function Home(props) {
    const [products , setProducts] = useState(data)


    const favourite = (product)=>{
        if(product.favourite){
            product.favourite = 'false'
        }else {
            product.favourite = 'true'
        }
        const newArr = []
        products.forEach((item)=>{
            if(item.id == product.id){
                newArr.push(product)
            }else {
                newArr.push(item)
            }
        })
        setProducts(newArr)
        

    }
        return (
            <div className={styles.Home}>
                <Header text={['mehran', 'khalili']} />
                <BannerBox/>
                <ProductShow data={products} sendDataToCardPage={props.sendDataToCardPage} favourite={favourite}/>
                <Footer backToHome={props.backToHome} goToBuyPage={props.goToBuyPage}/>
            </div>
        );
    }
