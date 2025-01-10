// import React from "react";
import styles from './index.module.sass'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import './index.sass'
// import 'slick-carousel/slick/slick-theme.css'
import {useRef} from "react";


export function Carousel(){


    const settings = {
        infinity: true,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 2,
        speed: 1000,
        arrows: false,
        className: "slider",
        swipeToSlide: true
    };

    let sliderRef = useRef(null);

    return (
        <Slider ref={slider => (sliderRef = slider)} {...settings} className={styles.slid}>
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer1.png" alt = "dancer"/>
                </div>
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer2.png" alt = "dancer"/>
                </div>
                {/*<div className={styles.gallery}>*/}
                {/*    <img src="./src/assets/Images/homepage/dancer3.png" alt = "dancer"/>*/}
                {/*</div>*/}
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer4.png" alt = "dancer"/>
                </div>
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer5.png" alt = "dancer"/>
                </div>
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer6.png" alt = "dancer"/>
                </div>
                {/*<div className={styles.gallery}>*/}
                {   /*    <img src="./src/assets/Images/homepage/dancer7.png" alt = "dancer"/>*/}
                {/*</div>*/}
                <div className={styles.gallery}>
                    <img src="./src/assets/Images/homepage/dancer8.png" alt = "dancer"/>
                </div>

        </Slider>
    );
}

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/scss';
// import 'swiper/scss/pagination';
// import 'swiper/scss/navigation';
// import './index.sass'
// // import 'swiper/swiper-bundle.min.css';
// // import 'swiper/swiper.min.css';
// import SwiperCore from '../../../node_modules/swiper';
// import {Scrollbar, A11y, Pagination, Navigation} from "swiper/modules";
//
//
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
//
// // const photos = [
// //     "./src/assets/Images/homepage/dancer1.png",
// //     "./src/assets/Images/homepage/dancer2.png",
// //     "./src/assets/Images/homepage/dancer3.png",
// //     "./src/assets/Images/homepage/dancer4.png",
// // ];
//
// export const Carousel = () => {
//     return (
//
//         <Swiper
//             spaceBetween={50}
//             slidesPerView={3}
//             navigation
//             pagination={{ clickable: true }}
//             scrollbar={{ draggable: true }}
//             onSwiper={(swiper) => console.log(swiper)}
//             onSlideChange={() => console.log('slide change')}
//         >
//                 <SwiperSlide>Slide 1</SwiperSlide>
//                 <SwiperSlide>Slide 2</SwiperSlide>
//                 <SwiperSlide>Slide 3</SwiperSlide>
//                 <SwiperSlide>Slide 4</SwiperSlide>
//                 <SwiperSlide>Slide 5</SwiperSlide>
//                 <SwiperSlide>Slide 6</SwiperSlide>
//                 <SwiperSlide>Slide 7</SwiperSlide>
//                 <SwiperSlide>Slide 8</SwiperSlide>
//                 <SwiperSlide>Slide 9</SwiperSlide>
//             </Swiper>
//
//     );
//     // return (
//     //     <>
//     //         <Swiper
//     //             spaceBetween={30}
//     //             slidesPerView={1}
//     //             centeredSlides={true}
//     //             autoplay={{
//     //                 delay: 2500,
//     //                 disableOnInteraction: false,
//     //             }}
//     //             pagination={{
//     //                 clickable: true,
//     //             }}
//     //             navigation={true}
//     //             modules={[Autoplay, Pagination, Navigation]}
//     //             className="mySwiper"
//     //         >
//     //             <SwiperSlide>Slide 1</SwiperSlide>
//     //             <SwiperSlide>Slide 2</SwiperSlide>
//     //             <SwiperSlide>Slide 3</SwiperSlide>
//     //             <SwiperSlide>Slide 4</SwiperSlide>
//     //             <SwiperSlide>Slide 5</SwiperSlide>
//     //             <SwiperSlide>Slide 6</SwiperSlide>
//     //             <SwiperSlide>Slide 7</SwiperSlide>
//     //             <SwiperSlide>Slide 8</SwiperSlide>
//     //             <SwiperSlide>Slide 9</SwiperSlide>
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer1.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer2.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer3.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer4.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer5.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer6.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer7.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //             {/*<SwiperSlide><img src={"./src/assets/Images/homepage/dancer8.png"} alt={"dancer"}/></SwiperSlide>*/}
//     //         </Swiper>
//     //     </>
//     // );
// }
