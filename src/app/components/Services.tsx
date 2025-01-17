import React from "react";

import { TfiPlus } from "react-icons/tfi";

function Services() {
  return (
    <div className="py-[190px] px-[90px] bg-services-image flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="uppercase text-[83px] leading-[84px] text-white font-medium">
          Áreas de Atuação
        </h1>
        <p className="w-[810px] text-[24px] leading-[31px] text-white">
          Atuamos nas esferas consultiva e contenciosa, prestando assessoria
          jurídica qualificada e individualizada a médicos, clínicas, hospitais
          e associações médicas.
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300">
          <TfiPlus size={30} color="white" /> <span>Direito Contencioso</span>
        </div>
        <div className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300">
          <TfiPlus size={30} color="white" /> <span>Direito Consultivo</span>
        </div>
        <div className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300">
          <TfiPlus size={30} color="white" /> <span>Ética e Bioética</span>
        </div>
        <div className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300">
          <TfiPlus size={30} color="white" /> <span>Proteção de Dados</span>
        </div>
      </div>
    </div>
  );
}

export default Services;
