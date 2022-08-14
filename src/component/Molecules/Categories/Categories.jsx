import React from 'react';
import {Category} from '../../atoms/Category/Category'
import styles from './Categories.module.css'

function Categories() {
    return (
        <div className={styles.categories}>
            <Category text={'All'}/>
            <Category text={"Popular"}/>
            <Category text={"Recent"}/>
            <Category text={"Recomended"}/>
        </div>
    );
}

export default Categories;