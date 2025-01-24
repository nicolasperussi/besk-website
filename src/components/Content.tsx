"use client";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import articles from "../../public/articles.json";
import { IArticle } from "@/types/article";
import ArticleCard from "./ArticleCard";
import Modal from "./Modal";
import { TfiClose } from "react-icons/tfi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Content() {
  const [article, setArticle] = useState<IArticle | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openArticle(article: IArticle) {
    setArticle(article);
    setIsModalOpen(true);
  }

  return (
    <div className="bg-white py-8 px-8 sm:px-16 flex flex-col gap-8">
      <h1 className="font-medium text-7xl">Conteúdo</h1>
      <div className="relative flex flex-col items-center mb-12">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".btn-next-contact",
            prevEl: ".btn-prev-contact",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          autoplay={{ delay: 5000 }}
          spaceBetween={24}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1536: {
              slidesPerView: 3,
            },
          }}
          className="w-full sm:w-[80%] lg:w-[90%]"
        >
          {articles.map((article: IArticle) => (
            <SwiperSlide key={article.image}>
              <ArticleCard
                openArticle={() => openArticle(article)}
                article={article}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation hidden absolute top-1/2 transform -translate-y-1/2 z-10 sm:flex justify-between w-full">
          <FaChevronLeft
            className="btn-prev-contact size-5 cursor-pointer"
            color="black"
            opacity={0.8}
          />
          <FaChevronRight
            className="btn-next-contact size-5 cursor-pointer"
            color="black"
            opacity={0.8}
          />
        </div>
        <div className="swiper-pagination absolute -bottom-12 flex gap-2"></div>
      </div>

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
              <div key={content.subtitle} className="flex flex-col gap-4">
                <div className="border-y-2 border-black p-4 relative flex flex-col gap-2">
                  {content.subtitle && <h5>{content.title}</h5>}
                  <h1 className="text-3xl font-medium">
                    {content.subtitle || content.title}
                  </h1>
                </div>
                <div className="flex flex-col gap-2">
                  {content.text.map((text) => (
                    <p key={text} className="text-lg indent-8 leading-6">
                      {text}
                    </p>
                  ))}
                  {content.source && (
                    <p className="text-lg mt-4">
                      <span className="font-medium">Fonte: </span>
                      <a
                        href={content.source}
                        target="_blank"
                        className="hover:text-secondary hover:underline transition-all duration-150"
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
