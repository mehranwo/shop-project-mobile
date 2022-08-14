import React from 'react';
import BuyProduct from '../../component/Organisms/buyProduct/BuyProduct'



function DetailCard(props) {


    return (
        <>
            <BuyProduct data={props.data} backToHome={props.backToHome} addBuy={props.addBuy} favourite={props.favourite} goToBuyPage={props.goToBuyPage}  />
        </>
    );
}

export default DetailCard;