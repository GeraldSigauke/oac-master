import React, { useRef, useState } from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

// import required modules
import { EffectCube } from 'swiper/modules';

const Slider = ({ slides }) => {
  return (
    <>
        <div id="carousel" className='mx-6'>
            <Swiper
            loop={true}
            effect={'cube'}
            grabCursor={true}
            cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
            }}
            pagination={true}
            modules={[EffectCube, Pagination]}
            className="mySwiper"
            >
                {
                    slides.map((slide) => (
                        <SwiperSlide key={slide.image}>
                            <img 
                                src={ slide.image } 
                                alt={ slide.title } 
                                id="slider-image"
                                className=''
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </>
  );
}

export default Slider