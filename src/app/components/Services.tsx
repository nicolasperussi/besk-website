"use client";
import React, { useState } from "react";

import { TfiPlus, TfiClose } from "react-icons/tfi";
import Modal from "./Modal";
import Image from "next/image";

function Services() {
  const [isFirstModalOpen, setIsFirstModalOpen] = useState(false);
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false);
  const [isThirdModalOpen, setIsThirdModalOpen] = useState(false);
  const [isFourthModalOpen, setIsFourthModalOpen] = useState(false);

  function onCloseFirstModal() {
    setIsFirstModalOpen(false);
  }
  function onCloseSecondModal() {
    setIsSecondModalOpen(false);
  }
  function onCloseThirdModal() {
    setIsThirdModalOpen(false);
  }
  function onCloseFourthModal() {
    setIsFourthModalOpen(false);
  }

  return (
    <div className="py-[190px] px-[90px] bg-services-image bg-cover flex flex-col gap-20">
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
        <div
          className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsFirstModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Direito Contencioso</span>
        </div>
        <div
          className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsSecondModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Direito Consultivo</span>
        </div>
        <div
          className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsThirdModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Ética e Bioética</span>
        </div>
        <div
          className="flex text-white text-[41px] leading-[38px] gap-[15px] cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsFourthModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Proteção de Dados</span>
        </div>

        {isFirstModalOpen && (
          <Modal isOpen={isFirstModalOpen} onClose={onCloseFirstModal}>
            <div className="flex gap-[25px] p-[10px]">
              <div className="h-[550px] w-[800px] flex-shrink relative">
                <Image
                  src={"/services/direito-contencioso.webp"}
                  alt="Direito Contencioso"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="border-y-2 border-black p-[15px] relative">
                  <h1 className="text-[48px] leading-[48px] font-medium">
                    Direito Contencioso
                  </h1>
                  <TfiClose
                    onClick={onCloseFirstModal}
                    size={30}
                    color="black"
                    className="absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer"
                  />
                </div>
                <ul className="list-disc pl-10 flex flex-col gap-[30px] text-[22px] leading-[28px]">
                  <li>
                    Defesa dos médicos em Sindicâncias e Processos
                    Ético-proﬁssionais junto aos Conselhos de Medicina;
                  </li>
                  <li>
                    Defesa de médicos,clínicas e hospitais em ações envolvendo
                    sua atuação proﬁssional;
                  </li>
                  <li>
                    Judicialização de negativas de plano de saúde (fornecimento
                    de medicamentos, procedimentos e tratamentos).
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        )}
        {isSecondModalOpen && (
          <Modal isOpen={isSecondModalOpen} onClose={onCloseSecondModal}>
            <div className="flex gap-[25px] p-[10px]">
              <div className="h-[550px] w-[800px] flex-shrink relative">
                <Image
                  src={"/services/direito-consultivo.webp"}
                  alt="Direito Consultivo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="border-y-2 border-black p-[15px] relative">
                  <h1 className="text-[48px] leading-[48px] font-medium">
                    Direito Consultivo
                  </h1>
                  <TfiClose
                    onClick={onCloseSecondModal}
                    size={30}
                    color="black"
                    className="absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer"
                  />
                </div>
                <ul className="list-disc pl-10 flex flex-col gap-[30px] text-[22px] leading-[28px]">
                  <li>
                    Elaboração e revisão de contratos de prestação de serviços
                    relativos aos pacientes, prestadores e colaboradores;
                  </li>
                  <li>
                    Estruturação de política interna de empregados e
                    colaboradores;
                  </li>
                  <li>
                    Criação/atualização de manual de compliance que visa reger
                    as relações com órgãos públicos, fornecedores e operadoras
                    de planos de saúde;
                  </li>
                  <li>
                    Orientação sobre as normas de órgãos reguladores omo a
                    Agência Nacional de Vigilância Sanitária (ANVISA) e a
                    Agência Nacional de Saúde Suplementar (ANS).
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        )}
        {isThirdModalOpen && (
          <Modal isOpen={isThirdModalOpen} onClose={onCloseThirdModal}>
            <div className="flex gap-[25px] p-[10px]">
              <div className="h-[550px] w-[800px] flex-shrink relative">
                <Image
                  src={"/services/etica.webp"}
                  alt="Ética e Bioética"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="border-y-2 border-black p-[15px] relative">
                  <h1 className="text-[48px] leading-[48px] font-medium">
                    Ética e Bioética
                  </h1>
                  <TfiClose
                    onClick={onCloseThirdModal}
                    size={30}
                    color="black"
                    className="absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer"
                  />
                </div>
                <ul className="list-disc pl-10 flex flex-col gap-[30px] text-[22px] leading-[28px]">
                  <li>
                    Elaboração de modelos de termos de consentimento livre e
                    esclarecido;
                  </li>
                  <li>
                    Elaboração de Diretivas antecipadas de vontade (testamento
                    vital);
                  </li>
                  <li>
                    Orientação quanto aos limites da publicidade médica segundo
                    as normas do Conselho Federal de Medicina (riscos,
                    diretrizes, obrigações, anúncios, publicações em geral);
                  </li>
                  <li>
                    Roteiro para a utilização das redes sociais (WhatsApp,
                    Instagram, Telegram e outros), na esfera corporativa e
                    pessoal;
                  </li>
                  <li>
                    Treinamento dos colaboradores acerca dos aspectos gerais do
                    Código de Ética Médica;
                  </li>
                  <li>
                    Principais diretrizes sobre documentos médicos (prontuários,
                    relatórios, atestados);
                  </li>
                  <li>Telemedicina.</li>
                </ul>
              </div>
            </div>
          </Modal>
        )}
        {isFourthModalOpen && (
          <Modal isOpen={isFourthModalOpen} onClose={onCloseFourthModal}>
            <div className="flex gap-[25px] p-[10px]">
              <div className="h-[550px] w-[800px] flex-shrink relative">
                <Image
                  src={"/services/lgpd.webp"}
                  alt="Proteção de dados"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-10">
                <div className="border-y-2 border-black p-[15px] relative">
                  <h1 className="text-[48px] leading-[48px] font-medium">
                    Proteção de Dados
                  </h1>
                  <TfiClose
                    onClick={onCloseFourthModal}
                    size={30}
                    color="black"
                    className="absolute right-[15px] top-1/2 -translate-y-1/2 cursor-pointer"
                  />
                </div>
                <ul className="list-disc pl-10 flex flex-col gap-[30px] text-[22px] leading-[28px]">
                  <li>
                    Orientação sobre os principais pontos da LGPD na área da
                    saúde;
                  </li>
                  <li>
                    Auxílio na implementação da LGPD, com a elaboração e
                    adaptação de termos e contratos e treinamento dos
                    colaboradores.
                  </li>
                </ul>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Services;
