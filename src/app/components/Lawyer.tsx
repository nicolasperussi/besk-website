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
    <div className="flex flex-1 flex-col gap-5">
      <div className="max-w-72 w-full mx-auto aspect-square relative">
        <Image
          src={imgPath}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col gap-1">
        <h3>{name}</h3>
        {/* TODO: Change to anchor tag and redirect to e-mail */}
        <span className="text-lg">{contact}</span>{" "}
      </div>
      <div className="flex flex-col gap-2">
        {description.map((desc) => (
          <p key={desc} className="text-lg">
            {desc}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Lawyer;
