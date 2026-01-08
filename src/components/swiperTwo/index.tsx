import { Swiper } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

export function SwiperTwo({ children }: { children: any }) {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={10}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true
      }}
      loop
      style={{ width: "100%", padding: "0 5px"  }}
    >
      {children}
    </Swiper>
  );
}
