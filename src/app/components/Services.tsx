"use client";
import React, { useState } from "react";

import { TfiPlus, TfiClose } from "react-icons/tfi";
import Modal from "./Modal";
import Image from "next/image";
import ServiceModal from "./ServiceModal";

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
    <div className="py-48 px-24 bg-services-image bg-cover flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="uppercase text-7xl text-white font-medium">
          Áreas de Atuação
        </h1>
        <p className="max-w-3xl text-2xl text-white">
          Atuamos nas esferas consultiva e contenciosa, prestando assessoria
          jurídica qualificada e individualizada a médicos, clínicas, hospitais
          e associações médicas.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div
          className="flex text-white text-4xl gap-4 cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsFirstModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Direito Contencioso</span>
        </div>
        <div
          className="flex text-white text-4xl gap-4 cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsSecondModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Direito Consultivo</span>
        </div>
        <div
          className="flex text-white text-4xl gap-4 cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsThirdModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Ética e Bioética</span>
        </div>
        <div
          className="flex text-white text-4xl gap-4 cursor-pointer hover:bg-[#B3C5D980] max-w-fit items-center transition-colors duration-300"
          onClick={() => setIsFourthModalOpen(true)}
        >
          <TfiPlus size={30} color="white" /> <span>Proteção de Dados</span>
        </div>

        {isFirstModalOpen && (
          <Modal isOpen={isFirstModalOpen} onClose={onCloseFirstModal}>
            <ServiceModal
              image="direito-contencioso"
              onClose={onCloseFirstModal}
              title="Direito Contencioso"
              texts={[
                "Defesa dos médicos em Sindicâncias e Processos Ético-proﬁssionais junto aos Conselhos de Medicina;",
                "Defesa de médicos, clínicas e hospitais em ações envolvendo sua atuação proﬁssional;",
                "Judicialização de negativas de plano de saúde (fornecimento de medicamentos, procedimentos e tratamentos).",
              ]}
            />
          </Modal>
        )}
        {isSecondModalOpen && (
          <Modal isOpen={isSecondModalOpen} onClose={onCloseSecondModal}>
            <ServiceModal
              image="direito-consultivo"
              onClose={onCloseSecondModal}
              title="Direito Consultivo"
              texts={[
                "Elaboração e revisão de contratos de prestação de serviços relativos aos pacientes, prestadores e colaboradores;",
                "Estruturação de política interna de empregados e colaboradores;",
                "Criação/atualização de manual de compliance que visa reger as relações com órgãos públicos, fornecedores e operadoras de planos de saúde;",
                "Orientação sobre as normas de órgãos reguladores omo a Agência Nacional de Vigilância Sanitária (ANVISA) e a Agência Nacional de Saúde Suplementar (ANS).",
              ]}
            />
          </Modal>
        )}
        {isThirdModalOpen && (
          <Modal isOpen={isThirdModalOpen} onClose={onCloseThirdModal}>
            <ServiceModal
              image="etica"
              title="Ética e Bioética"
              onClose={onCloseThirdModal}
              texts={[
                "Elaboração de modelos de termos de consentimento livre e esclarecido;",
                "Elaboração de Diretivas antecipadas de vontade (testamento vital);",
                "Orientação quanto aos limites da publicidade médica segundo as normas do Conselho Federal de Medicina (riscos, diretrizes, obrigações, anúncios, publicações em geral);",
                "Roteiro para a utilização das redes sociais (WhatsApp, Instagram, Telegram e outros), na esfera corporativa e pessoal;",
                "Treinamento dos colaboradores acerca dos aspectos gerais do Código de Ética Médica;",
                "Principais diretrizes sobre documentos médicos (prontuários, relatórios, atestados);",
                "Telemedicina.",
              ]}
            />
          </Modal>
        )}
        {isFourthModalOpen && (
          <Modal isOpen={isFourthModalOpen} onClose={onCloseFourthModal}>
            <ServiceModal
              image="lgpd"
              title="Proteção de Dados"
              onClose={onCloseFourthModal}
              texts={[
                "Orientação sobre os principais pontos da LGPD na área da saúde;",
                "Auxílio na implementação da LGPD, com a elaboração e adaptação de termos e contratos e treinamento dos colaboradores.",
              ]}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Services;
