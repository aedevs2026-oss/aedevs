"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const banners = [
  "/aedevs-4.png",,
  "/aedevs-1.png",
  "/aedevs-5.png",
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative h-[240px] sm:h-[320px] md:h-[450px] lg:h-[700px] w-full overflow-hidden">
      {/* Images */}
      {banners.map((banner, index) => (
        <Image
          src={banner}
          alt={`Banner ${index + 1}`}
          fill
          priority={index === 0}
          className={`absolute inset-0 object-contain lg:object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="relative aspect-[16/9] lg:h-[700px] w-full overflow-hidden rounded-2xl lg:rounded-[30px] shadow-2xl"
      >
        <ChevronLeft
          size={20}
          className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-slate-700"
        />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 lg:right-5 top-1/2 -translate-y-1/2 z-20 rounded-full bg-gray-100/90 p-2 sm:p-3 shadow-lg transition hover:bg-white hover:scale-110"
      >
        <ChevronRight
          size={20}
          className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-slate-700"
        />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 h-2 bg-blue-600"
                : "w-2 h-2 bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
