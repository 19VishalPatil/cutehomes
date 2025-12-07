"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { ItemMedia } from "@/lib/api/types/itemTypes/itemMedia";
import { X } from "lucide-react";

export default function SingleProductCarousel({
  mediaName,
  media,
}: {
  mediaName: string;
  media: ItemMedia[];
}) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [zoomImage, setZoomImage] = useState<string | null>(null);

  return (
    <>
      <style>{`
        .animate-fadeIn { animation: fadeIn .2s ease; }
        .animate-zoomIn { animation: zoomIn .25s ease; }
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes zoomIn { from { transform: scale(.92) } to { transform: scale(1) } }
      `}</style>

      {/* ZOOM MODAL */}
      {zoomImage && (
        <div
          className="fixed inset-0 bg-black/80 z-[999] flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setZoomImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute -top-10 right-0 text-white"
              onClick={() => setZoomImage(null)}
            >
              <X size={32} />
            </button>
            <img
              src={zoomImage}
              className="w-full h-auto rounded-xl shadow-2xl animate-zoomIn"
              alt="Zoomed"
            />
          </div>
        </div>
      )}

      {/* CAROUSEL */}
      <div className="w-full max-w-full md:max-w-2xl mx-auto px-2">
        {/* MAIN CAROUSEL */}
        <Swiper
          loop
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2 rounded-xl overflow-hidden shadow-lg custom-swiper-nav"
        >
          {media.map((m) => {
            const { id, path, mime } = m;
            const isVideo = mime.startsWith("video/");

            return (
              <SwiperSlide key={id}>
                <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-xl overflow-hidden group">
                  {isVideo ? (
                    <>
                      <video
                        src={path}
                        controls
                        playsInline
                        className="w-full h-full object-cover"
                        onPlay={(e) => e.stopPropagation()}
                        onClick={(e) => e.stopPropagation()}
                      />
                    </>
                  ) : (
                    <img
                      src={path}
                      alt={mediaName}
                      className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-105 cursor-zoom-in"
                      onClick={() => setZoomImage(path)}
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        {/* THUMBNAILS */}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop
          freeMode
          watchSlidesProgress
          spaceBetween={12}
          breakpoints={{
            0: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper mt-4"
        >
          {media.map((m) => {
            const { id, path, mime } = m;
            const isVideo = mime.startsWith("video/");

            return (
              <SwiperSlide key={id}>
                <div className="relative h-16 sm:h-20 w-full rounded-lg overflow-hidden cursor-pointer border border-transparent hover:border-gray-300 transition-all">
                  {isVideo ? (
                    <>
                      <video
                        src={path}
                        className="w-full h-full object-cover opacity-80"
                      />
                      {/* SMALL PLAY ICON */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-black/50 p-1.5 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-white"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={path}
                      alt={mediaName}
                      className="w-full h-full object-cover opacity-80 hover:opacity-100 transition cursor-pointer"
                    />
                  )}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
