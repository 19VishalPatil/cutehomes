"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const banners = [
  // {
  //   id: 1,
  //   image: "/images/1.jpg",
  //   alt: "Die-cast Cars Collection",
  // },
  {
    id: 2,
    image: "/images/2.jpg",
    alt: "Stuffed Toys Sale",
  },
  // {
  //   id: 3,
  //   image: "/images/3.jpg",
  //   alt: "Trending Gifts",
  // },
];

export default function HeroCarousel() {
  return (
    <div className="w-full ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        // navigation
        // pagination={{ clickable: true }}
        // autoplay={{ delay: 5000 }}
        // loop
        className="w-full h-[300px] md:h-[450px] custom-swiper-nav"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={banner.image}
                alt={banner.alt}
                fill
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
