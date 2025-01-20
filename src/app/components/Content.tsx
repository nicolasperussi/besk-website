"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";

import articles from "../../../public/articles.json";
import { IArticle } from "@/types/article";
import ArticleCard from "./ArticleCard";
import Modal from "./Modal";
import { TfiClose } from "react-icons/tfi";

function Content() {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openArticle(article: IArticle) {
    setArticle(article);
    setIsModalOpen(true);
  }

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
            <ArticleCard
              openArticle={() => openArticle(article)}
              article={article}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isModalOpen && article && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="relative px-4 pr-12 pt-4 pb-12 flex flex-col gap-12">
            <TfiClose
              onClick={() => setIsModalOpen(false)}
              size={30}
              color="black"
              className="absolute right-0 top-4 cursor-pointer hover:opacity-50 transition-opacity duration-150"
            />
            {article.content.map((content) => (
              <div className="flex flex-col gap-4">
                <div className="border-y-2 border-black p-[15px] relative">
                  <h1 className="text-[32px] leading-[32px] font-medium">
                    {content.subtitle}
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  {content.text.map((text) => (
                    <p className="text-[18px] indent-8 leading-6">{text}</p>
                  ))}
                  {content.source && (
                    <p className="text-[18px] mt-4">
                      <span className="font-medium">Fonte: </span>
                      <a
                        href={content.source}
                        target="_blank"
                        className="hover:text-[#B3C5D9] hover:underline transition-all duration-150"
                      >
                        {content.source}
                      </a>
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Modal>
      )}
    </div>
  );
}

export default Content;
