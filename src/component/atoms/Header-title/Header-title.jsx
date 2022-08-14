import React from 'react';
import styles from './Header-title.module.css'

function HeaderTitle(props) {
    return (
        <div className={styles.headerTitle}>
            {props.text.length == 2 ?
                (
                    <>
                        <span className={styles.username}>{props.text[0]}</span>
                        <span className={styles.title}>{props.text[1]}</span>
                    </>
                ):(
                    <span className={styles.title}>{props.text[0]}</span>
                )

            }
        </div>
    );
}

export default HeaderTitle;