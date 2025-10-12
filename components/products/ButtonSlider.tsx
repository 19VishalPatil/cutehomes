"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Category } from "@/lib/api/types/itemTypes/category";

export default function ButtonSwiper({
  categories,
}: {
  categories: Category[];
}) {
  const [activeIdx, setActiveIdx] = useState<number | null>(null); // Typed state

  return (
    <Swiper
      slidesPerView={6}
      spaceBetween={10}
      modules={[Navigation]}
      navigation
      style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}
      breakpoints={{
        0: { slidesPerView: 3 },
        640: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
    >
      {categories.map((cat, idx) => (
        <SwiperSlide key={idx}>
          <button
            onClick={() => setActiveIdx(idx)}
            className={activeIdx === idx ? "active-button" : ""}
            style={{
              padding: "8px 18px",
              background: activeIdx === idx ? "#1976d2" : "#eee",
              color: activeIdx === idx ? "#fff" : "#000",
              borderRadius: 4,
              border: "none",
              fontWeight: activeIdx === idx ? "bold" : "normal",
              cursor: "pointer",
            }}
          >
            {cat.name}
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
