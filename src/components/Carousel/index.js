import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React from "react";
import styles from './index.module.sass';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import './index.sass';
// import 'slick-carousel/slick/slick-theme.css'
import { useRef } from "react";
export function Carousel() {
    const settings = {
        infinity: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 2,
        speed: 1000,
        arrows: false,
        className: "slider"
    };
    let sliderRef = useRef(null);
    return (_jsxs(Slider, { ref: slider => (sliderRef = slider), ...settings, className: styles.slid, children: [_jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer1.png", alt: "dancer" }) }), _jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer2.png", alt: "dancer" }) }), _jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer4.png", alt: "dancer" }) }), _jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer5.png", alt: "dancer" }) }), _jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer6.png", alt: "dancer" }) }), _jsx("div", { className: styles.gallery, children: _jsx("img", { src: "./src/assets/Images/homepage/dancer8.png", alt: "dancer" }) })] }));
}
