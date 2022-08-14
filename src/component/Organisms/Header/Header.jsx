import React from 'react';
import HeaderTitle from '../../atoms/Header-title/Header-title'
import ProfileImage from '../../atoms/Profile-image/Profile-image'
import Icon from '../../atoms/Icon/Icon'
import {FaThLarge} from 'react-icons/fa'
import styles from './Header.module.css'

function Header(props) {
    return (
        <header className={styles.header}>
            <Icon icon={<FaThLarge/>}/>
            <HeaderTitle text={props.text}/>
            <ProfileImage />
        </header>
    );
}

export default Header;