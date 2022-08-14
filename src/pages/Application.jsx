import React,{useState} from 'react';
import Home from './Home/Home'
import DetailCard from './detailCard/detailCard'
import BuyPage from './buyPage/BuyPage'

function Application(props) {
    const [data, setData] = useState([]);
    const [storage, setStorage] = useState([])
    const [showPage, setShowPage] = useState('Home')
    const sendDataToCardPage = (str) => {
        setData(str)
        setShowPage('DetailCard')
    }

    const backToHome = () => {
        setShowPage('Home')
    }

    const updateStorage = (product) => {
        const newArr = []
        storage.forEach((item) => {
                if (item.id == product.id) {
                    newArr.push(product)

                } else {
                    newArr.push(item)
                }
            }
        )
        setStorage(newArr)
    }

    const increase = (product) => {
        if (product.count <= product.stock) {
            product.stock--
            product.count++
            updateStorage(product)
        }
    }

    const decrease = (product) => {
        if (product.count == 1) {
            product.stock++
            product.count--
            const newArr = storage.filter((item) => item.id != product.id)
            setStorage(newArr)
        } else if (product.count >= product.stock) {
            product.stock++
            product.count--
            updateStorage(product)
        }
    }


    const addBuy = (product)=>{
        if(product.stock > 0){
            product.stock--
            product.count++
            const check = storage.find((item)=> item.id == product.id)
            if(check){
                updateStorage(product)
            }else {
                setStorage([...storage , product])
            }

        } else {
            return 'تموم شده'
        }
    }

    const goToBuyPage = ()=>{
        setShowPage("BuyPage")
    }

    return (
        <>
            {showPage === 'Home' && <Home sendDataToCardPage={sendDataToCardPage} goToBuyPage={goToBuyPage} /> }
            {showPage === 'BuyPage' && <BuyPage backToHome={backToHome} storage={storage} increase={increase} decrease={decrease}/>}
            {showPage === 'DetailCard' && <DetailCard data={data} backToHome={backToHome} goToBuyPage={goToBuyPage} addBuy={addBuy}/> }
        </>
    );
}

export default Application;