import React from 'react';
import Categories from '../../Molecules/Categories/Categories'
import BannerSale from '../../Molecules/banner-sale/Banner-sale'
import SearchBox from '../../Molecules/Search-box/Search-box'
import styles from './Banner-Box.module.css'

function BannerBox() {
    return (
        <section className={styles.bannerBox}>
            <SearchBox/>
            <BannerSale/>
            <Categories/>
        </section>
    );
}

export default BannerBox;