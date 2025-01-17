import Image from "next/image";
import React from "react";

interface LawyerProps {
  name: string;
  contact: string;
  description: Array<string>;
  imgPath: string;
}

function Lawyer({ name, contact, description, imgPath }: LawyerProps) {
  return (
    <div className="flex flex-1 flex-col gap-[20px]">
      <div className="max-w-[296px] w-full mx-auto aspect-square relative">
        <Image
          src={imgPath}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h1 className="font-medium text-[28px] leading-[38px]">{name}</h1>
        <span className="text-[18px] leading-[23px]">{contact}</span>
      </div>
      <div className="flex flex-col gap-[10px]">
        {description.map((desc) => (
          <p key={desc} className="text-[18px] leading-[23px]">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Lawyer;
