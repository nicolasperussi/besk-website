"use client";
import { IArticle } from "@/types/article";
import Image from "next/image";
import React from "react";

interface IArticleCard {
  openArticle: (article: IArticle) => void;
  article: IArticle;
}

function ArticleCard({ article, openArticle }: IArticleCard) {
  const { image, title, content } = article;

  return (
    <div className="border-2 border-black p-4">
      <div className="h-56 relative mb-4">
        <Image
          src={`/articles/${image}`}
          alt={content[0].subtitle}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="font-medium text-3xl ml-2 mb-2">{title}</h1>
      <div className="border-y-2 border-black py-5 h-72">
        <ul className="text-lg ml-8 list-disc">
          {article.content.map((item) => (
            <li>
              <strong>{item.title}:</strong> {item.subtitle}
            </li>
          ))}
        </ul>
      </div>
      <div
        className="pt-5 pl-2 cursor-pointer"
        onClick={() => openArticle(article)}
      >
        <h1 className="font-medium text-xl">Saiba mais</h1>
      </div>
    </div>
  );
}

export default ArticleCard;
