"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";

import Banner1 from "../../public/banner-1.webp";
import Banner2 from "../../public/banner-2.webp";
import Banner3 from "../../public/banner-3.webp";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

function Hero() {
  return (
    <div
      id="quem-somos"
      className="mx-auto p-8 sm:p-16 max-w-6xl flex flex-col gap-8"
    >
      <div className="text-xl flex flex-col gap-4">
        <p>
          Bergstein Skorkowski Advogados é um escritório com ampla experiência
          no Direito aplicado à área da saúde, pioneiro na atuação da defesa dos
          profissionais e serviços de saúde.
        </p>
        <p>
          Sua história começa na década de 80, quando o Doutor João Marques foi
          contratado pela Associação Paulista de Medicina. Posteriormente, em
          1998, uniu-se ao advogado Gilberto Bergstein, dando origem ao
          escritório Marques e Bergstein Advogados Associados, uma das bancas
          pioneiros a tratar de casos de planos e seguros de saúde e erros
          médicos.
        </p>
        <p>
          Desde então, atenderam diversos clientes da área, como a Associação
          dos Médicos do Hospital Israelita Albert Einstein, Sociedade
          Brasileira de Dermatologia, Sociedade de Obstetrícia e Ginecologia do
          Estado de São Paulo, Sociedade Brasileira de Cirurgia Bariátrica e
          Metabólica, Sociedade Brasileira de Nefrologia, Hospital Samaritano de
          São Paulo, Colégio Brasileiro de Radiologia e Diagnóstico por Imagem,
          Sociedade Brasileira de Radioterapia, Sociedade Brasileira de
          Radiologia Intervencionista e Cirurgia Vascular, dentre outros.
        </p>
        <p>
          O principal propósito do escritório é desenvolver uma advocacia
          especializada, com conhecimento profundo, atendimento dinâmico e
          personalizado, sob a liderança de uma equipe de advogados engajada e
          atualizada.
        </p>
      </div>
      {/* TODO: align banner to text on smaller screens */}
      <div className="w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
          }}
          loop={true}
          slidesPerView={1}
          autoplay={{ delay: 3000 }}
          className="relative aspect-[1120/530]"
        >
          <SwiperSlide className="z-0">
            <Image src={Banner1} alt="Banner 1" fill className="object-cover" />
          </SwiperSlide>
          <SwiperSlide className="z-0">
            <Image src={Banner2} alt="Banner 2" fill className="object-cover" />
          </SwiperSlide>
          <SwiperSlide className="z-0">
            <Image src={Banner3} alt="Banner 3" fill className="object-cover" />
          </SwiperSlide>

          <FaChevronLeft
            className="btn-prev size-4 sm:size-5 absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer"
            color="white"
            opacity={0.8}
          />
          <FaChevronRight
            className="btn-next size-4 sm:size-5 absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer"
            color="white"
            opacity={0.8}
          />
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
