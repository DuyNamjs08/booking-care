import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import logo1 from '../../assets/banner/1.png'
import logo2 from '../../assets/banner/2.png'
import logo3 from '../../assets/banner/3.png'
import logo4 from '../../assets/banner/4.png'

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        
        pagination={{
          clickable: true,
        }}
        navigation={{
            nextEl: ".image-swiper-button-next",
            prevEl: ".image-swiper-button-prev",
            disabledClass: "swiper-button-disabled"
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo4} alt="" /></SwiperSlide>
        
      </Swiper>
    </>
  );
}
