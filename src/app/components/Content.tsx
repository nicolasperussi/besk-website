"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import articles from "../../../public/articles.json";
import { IArticle } from "@/types/article";
import Article from "./Article";

function Content() {
  return (
    <div className="bg-white py-20 px-[90px] flex flex-col gap-[60px]">
      <h1 className="font-medium text-[70px] leading-[84px]">Conteúdo</h1>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: ".btn-next",
          prevEl: ".btn-prev",
        }}
        slidesPerView={3}
        spaceBetween={40}
        className="w-full"
      >
        {articles.map((article: IArticle) => (
          <SwiperSlide key={article.title}>
            <Article {...article} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Content;
