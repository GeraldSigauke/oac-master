import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Slider = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
        {
            slides.map((slide) => (
                <SwiperSlide key={slide.image}>
                    <img 
                        src={ slide.image } 
                        alt={ slide.title } 
                        id="slider-image"
                    />
                </SwiperSlide>
            ))
        }
    </Swiper>
  );
}

export default Slider