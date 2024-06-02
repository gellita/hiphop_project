// import React from "react";
import styles from './index.module.sass'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'


export function Carousel(){
    const settings = {
        infinity: true,
        slidesToShow: 3,
        autoplaySpeed: 3,
    };

    return (
        <Slider {...settings}>
            <div className={styles.gallery}>
                <img src="./src/assets/Images/homepage/dancer1.png" alt = "dancer"/>
            </div>
            <div className={styles.gallery}>
                <img src="./src/assets/Images/homepage/dancer2.png" alt = "dancer"/>
            </div>
            <div className={styles.gallery}>
                <img src="./src/assets/Images/homepage/dancer3.png" alt = "dancer"/>
            </div>

        </Slider>
    );
}