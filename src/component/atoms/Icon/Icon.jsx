import React, { useEffect, useState } from 'react';
import styles from './Icon.module.css'

function Icon(props) {
    const [inPage , setInPage] = useState(false)
    const [infavourite , setInFavoutite] = useState(true)
    const [active , setActive] = useState(false)
    
    useEffect(()=>{
        if(props.home){
            setInPage(true)
        } else if (props.buyPage){
            setInPage(true)
        } 
        if(props.favourite && infavourite){
            setActive(true)
            setInFavoutite(false)
        }else {
            setActive(false)
            setInFavoutite(true)
        } 
    },[])
   
    return (
        <div onClick={()=>{
            if(props.backToHome){
                props.backToHome()
                setInPage(true)
            } else if(props.goToBuyPage){
                props.goToBuyPage()
                setInPage(true)
            } 
            if(props.favourite && infavourite){
                setActive(true)
                setInFavoutite(false)
            }else {
                setActive(false)
                setInFavoutite(true)
            }
        }} className={props.dark || props.active  ? (props.active ? styles.active : styles.dark) : (styles.background)}>
            <i className={(inPage || active ? styles.inPage : styles.icon)}>{props.icon}</i>
        </div>
    );
}

export default Icon;