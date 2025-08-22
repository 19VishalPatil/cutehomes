"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import SingleProduct from "./SingleProduct";
import { Item } from "@/lib/api/types/itemTypes/item";

export default function ProductsSlider({ items }: { items: Item[] }) {
  return (
    <div className="w-full px-4 py-8">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="custom-swiper-nav"
        spaceBetween={16}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 4,
          },
        }}
      >
        {items.map((item) => {
          const { id, name, media, sellingPrice } = item;
          const mediaImage = media.filter((m) => m.mime.startsWith("image/"))[0]
            ?.path;

          return (
            <SwiperSlide key={id}>
              <SingleProduct
                id={id}
                name={name}
                mediaImage={mediaImage}
                price={sellingPrice}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
