import Image from "next/image";
import React from "react";
import { TfiClose } from "react-icons/tfi";

interface IServiceModalProps {
  onClose: () => void;
  title: string;
  image: string;
  texts: Array<string>;
}

function ServiceModal({ onClose, title, image, texts }: IServiceModalProps) {
  return (
    <div className="flex flex-col-reverse lg:flex-row gap-8 p-3">
      <div className="w-full h-96 lg:h-[550px] lg:w-[800px] flex-shrink relative">
        <Image
          src={`/services/${image}.webp`}
          alt={title}
          fill
          className="object-cover rounded lg:rounded-none"
        />
      </div>
      <div className="flex flex-col gap-8">
        <div className="border-y-2 border-black p-4 relative">
          <h1 className="text-5xl font-medium">{title}</h1>
          <TfiClose
            onClick={onClose}
            size={30}
            color="black"
            className="absolute right-4 top-1/2 -translate-y-1/2 cursor-pointer"
          />
        </div>
        <ul className="list-disc pl-10 flex flex-col gap-4 text-2xl">
          {texts.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ServiceModal;
