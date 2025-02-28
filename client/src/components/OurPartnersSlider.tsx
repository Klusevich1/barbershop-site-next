import Image from "next/image";
import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const partners = [
  {
    alt: "AllStars",
    imagePath: "/resources/allstars-logo.png",
  },
  {
    alt: "Inside",
    imagePath: "/resources/inside-logo.svg",
  },
  {
    alt: "Dinamo",
    imagePath: "/resources/logo-dinamo.png",
  },
  {
    alt: "Nsv",
    imagePath: "/resources/nsv-logo.svg",
  },
  {
    alt: "Xfit",
    imagePath: "/resources/xfit-logo.svg",
  },
  {
    alt: "DoDo",
    imagePath: "/resources/dodo-logo.png",
  },
  {
    alt: "TopTyre",
    imagePath: "/resources/toptyre-logo.svg",
  },
  {
    alt: "Varka",
    imagePath: "/resources/varka-logo.svg",
  },
];

const OurPartnersSlider = () => {
  return (
    <div className="bg-gray_bg py-[30px] my-[30px]">
      <h2 className="text-[60px] font-bold text-center mb-[20px]">Наши партнеры</h2>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          centeredSlides={true}
          loop={true}
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          className="mb-[30px]"
        >
          {partners.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="w-full flex justify-center">
                <div className="max-w-[200px]">
                  <Image
                    src={item.imagePath}
                    alt={item.alt}
                    width={200}
                    height={100}
                    className="h-[100px] object-contain"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default OurPartnersSlider;
