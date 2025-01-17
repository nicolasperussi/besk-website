import { IArticle } from "@/types/article";
import Image from "next/image";
import React from "react";

function Article({ title, image, content }: IArticle) {
  return (
    <div className="border-2 border-black p-5">
      <div className="w-full h-[225px] relative mb-[15px]">
        <Image
          src={`/articles/${image}`}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h1 className="font-medium text-[28px] leading-[32px] ml-2 mb-[10px]">
        {title}
      </h1>
      <div className="border-y-2 border-black py-5">
        <p className="text-[18px] leading-[23px] ml-2">{content[0].text[0]}</p>
      </div>
      <div className="pt-5 pl-2">
        <h1 className="font-medium text-[20px] leading-[1.333rem]">
          Saiba mais
        </h1>
      </div>
    </div>
  );
}

export default Article;
