// import React from "react";
// import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.min.css";
// import "swiper/swiper.min.css";
// import "../index.css";
// import { images } from '../constants';

// SwiperCore.use([EffectCoverflow, Pagination]);
// // if you want to use array
// const slide_img = [
//    images.o1, 
//    images.o2,
//    images.o3,
//    images.o4,
//    images.o5
// ];

// const SwiperPage = () => {
//   return (
//     <>
//       <div className="lg:px-5">
//         <div id="swiper">
//           <Swiper
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: false,
//             }}
//             pagination={true}
//             className="mySwiper"
//           >
//             {/* // Using array */}
//             {slide_img.map((img, i) => {
//               return (
//                 <SwiperSlide key={i}>
//                   <img 
//                     id="swiper" 
//                     className="rounded-lg" 
//                     src={img} 
//                     alt=""
//                   />
//                 </SwiperSlide>
//               );
//             })}
//           </Swiper>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SwiperPage;