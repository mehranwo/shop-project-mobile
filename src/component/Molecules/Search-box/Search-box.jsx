import React , {useState} from 'react';
import Icon from '../../atoms/Icon/Icon'
import  {BsSliders , BsSearch} from 'react-icons/bs'
import styles from './Search-box.module.css'

function SearchBox(props) {
    const [value,setValue]=useState()

    const onChange = (e)=>{
        setValue(e.target.value)
    }

    return (
        <div className={styles.searchbox}>
            <div className={styles.inputbox}>
                <Icon icon={<BsSearch size={"15"}/>}/>
                <input type="text" value={value} className={styles.input} onChange={onChange}/>
            </div>
            <div className={styles.icon}>
                <Icon icon={<BsSliders/>}/>
            </div>
        </div>
    );
}

export default SearchBox;