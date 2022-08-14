import React from 'react';
import styles from './Profile-image.module.css'
import profile from '../../../asset/profile.jpg'

function ProfileImage(props) {
    return (
        <div className={styles.div}>
            <img src={profile} className={styles.img} />
        </div>
    );
}

export default ProfileImage;