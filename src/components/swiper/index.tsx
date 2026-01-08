import styled from 'styled-components';

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";


const Img = styled.img`
height: 6rem;
width: auto;
user-select: none;
filter: grayscale(100%);

transition: .3s ease-in-out;

&:hover {
 transform: scale(104%);
 filter: grayscale(0%);
 filter: drop-shadow(0px 0px 3px #ffffff60);
 cursor: pointer;
}

  @media screen and (max-width: 490px) {
    height: 4.5rem;
  }
`

export function SwiperDiv({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Autoplay]}             
      loop={true}                     
      autoplay={{
        delay: 1500,                   
        disableOnInteraction: false,   
        pauseOnMouseEnter: true,     
      }}
      spaceBetween={20}
      slidesPerView={7}  
      breakpoints={{
        0: {
          slidesPerView: 4, // mobile até 490px
          spaceBetween: 0
        },
        491: {
          slidesPerView: 7, // acima de 490px
          spaceBetween: 20
        },
      }}             
      style={{ padding: "20px 0" }}
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Img
            src={img}
            alt={`Slide ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
