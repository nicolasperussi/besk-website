import React from "react";
import Lawyer from "./Lawyer";

const lawyers = [
  {
    name: "Gilberto Bergstein",
    contact: "gilberto@besk.com.br",
    description: [
      "Advogado. Graduado pela Universidade de São Paulo em 1997, sócio fundador do escritório. Obteve título de especialista em Responsabilidade Civil pela Fundação Getúlio Vargas-Direito em 2006.",
      "Em 2012, tornou-se Doutor em Direito Civil pela Universidade de São Paulo. Professor Convidado na graduação e da pós-graduação em Medicina da Faculdade Israelita de Ciências da Saúde Albert Einstein, e na pós-graduação da Universidade Federal de São Paulo.",
    ],
    imgPath: "/gilberto.webp",
  },
  {
    name: "Alan Skorkowski",
    contact: "alan@besk.com.br",
    description: [
      "Advogado. Graduado pela Faculdade de Direito da Universidade Presbiteriana Mackenzie em 2008. Obteve título de especialista em Direito Civil e Direito do Consumidor pela EPD - Escola Paulista de Direito em 2013.",
      "Membro da Comissão Especial de Direito Médico e de Saúde da Ordem dos Advogados do Brasil – Seccional de São Paulo.",
    ],
    imgPath: "/alan.webp",
  },
  {
    name: "Anna Soares Marmirolli",
    contact: "anna@besk.com.br",
    description: [
      "Advogada. Graduada pela Faculdade de Direito do Mackenzie em 2017. Possui título de especialista em Direito Médico e Hospitalar pela EPD (2021), em Direito Processual Civil (2019) e em Direito do Consumidor (2020) pela UniDomBosco.",
      "Em 2024, tornou-se Mestre em Direito Político e Econômico pelo Mackenzie. Professora Convidada na graduação em Medicina da Faculdade Israelita de Ciências da Saúde Albert Einstein.",
    ],
    imgPath: "/anna.webp",
  },
];

function Lawyers() {
  return (
    <div
      id="advogados"
      className="px-8 sm:px-16 py-12 sm:py-12 flex flex-col gap-12"
    >
      <div className="border-y-2 border-black">
        <h1 className="text-7xl text-center md:text-left md:ml-4 lg:ml-8 my-4">
          Advogados
        </h1>
      </div>
      <div className="gap-12 xl:gap-16 2xl:gap-20 2xl:px-8 flex flex-row flex-wrap flex-1 relative justify-around">
        {lawyers.map((law) => (
          <Lawyer {...law} key={law.name} />
        ))}
      </div>
    </div>
  );
}

export default Lawyers;
