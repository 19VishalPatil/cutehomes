"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Item } from "@/lib/api/types/itemTypes/item";
import ProductCard from "./ProductCard";

export default function ProductsSlider({ items }: { items: Item[] }) {
  return (
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
          slidesPerView: 2,
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
        const {
          id,
          name,
          categories,
          media,
          sellingPrice,
          slug,
          isWishlisted,
        } = item;
        const mediaImage = media.filter((m) => m.mime.startsWith("image/"))[0]
          ?.path;

        return (
          <SwiperSlide key={id}>
            <ProductCard
              id={id}
              name={name}
              slug={slug}
              mediaImage={mediaImage}
              price={sellingPrice}
              isWishlisted={isWishlisted}
              categories={categories}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
