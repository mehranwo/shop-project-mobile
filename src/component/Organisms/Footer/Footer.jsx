import React from 'react';
import Icon from '../../atoms/Icon/Icon'
import {AiFillHome,AiOutlineShoppingCart,AiOutlineUser} from 'react-icons/ai'
import {CgNotes} from 'react-icons/cg'
import styles from './Footer.module.css'



function Footer(props) {
    return (
        <footer className={styles.footer}>
            <Icon icon={<AiFillHome/>} backToHome={props.backToHome}  home={props.goToBuyPage ? 'Home' : 0}  />
            <Icon icon={<CgNotes/>}/>
            <Icon icon={<AiOutlineShoppingCart/>} goToBuyPage={props.goToBuyPage} buyPage={props.backToHome ? 'buyPage': 0} />
            <Icon icon={<AiOutlineUser/>}/>
        </footer>
    );
}

export default Footer;