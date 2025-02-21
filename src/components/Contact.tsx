"use client";
import React, { useState } from "react";

import Image from "next/image";
import Logo from "../../public/logo-symbol.svg";
import Link from "next/link";

function Contact() {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  return (
    <div
      id="contato"
      className="mx-auto max-w-6xl py-16 px-8 sm:p-16 flex flex-col-reverse md:flex-row gap-16"
    >
      {/* // TODO: if "Fale Conosco" is visible, change to 'flex-col gap-8' and remove 'items-center' */}
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-16 flex-1">
        <div className="">
          <Image
            priority
            src={Logo}
            alt="Bergstein e Skorkowski Advogados"
            height={192}
          />
        </div>
        <div className="flex flex-col gap-2 max-w-fit">
          {/* <a
            href="mailto:contato@besk.com.br"
            className="hover:text-white transition-all duration-300 !font-medium !text-xl"
          >
            contato@besk.com.br
          </a> */}
          <Link
            href="https://maps.app.goo.gl/fkGbZp8aqWEuujTs8"
            target="_blank"
            className="hover:text-white transition-all duration-300"
          >
            <h1 className="!font-medium !text-xl">Rua Gustavo Teixeira, 273</h1>
            <h1 className="!font-medium !text-xl">
              Pacaembu/SP - CEP 01236-010
            </h1>
          </Link>
          <h1 className="!font-medium !text-xl">+55 (11) 3873-7385</h1>
          <a
            href="tel:11982457385"
            className="hover:text-white transition-all duration-300 !font-medium !text-xl"
          >
            +55 (11) 9 8245-7385
          </a>
        </div>
      </div>
      {/* <div id="form" className="flex flex-col gap-4 flex-1">
        <h1 className="font-medium text-2xl">Fale conosco</h1>
        <form className="w-full md:max-w-md flex flex-col gap-4">
          <input
            className="w-full py-4 px-4 bg-transparent outline-none appearance-none border-2 border-black focus:border-[3px] font-medium placeholder:text-[#3E433C]"
            type="text"
            placeholder="Nome:"
          />
          <input
            className="w-full py-4 px-4 bg-transparent outline-none appearance-none border-2 border-black focus:border-[3px] font-medium placeholder:text-[#3E433C]"
            type="email"
            placeholder="E-mail:"
          />
          <textarea
            rows={9}
            className="w-full py-4 px-4 bg-transparent outline-none appearance-none border-2 border-black focus:border-[3px] font-medium placeholder:text-[#3E433C]"
            placeholder="Mensagem:"
          />
          <div className="flex items-center gap-6">
            <button
              type="submit"
              className="border-2 border-black h-12 w-full lg:w-40 px-4 py-2 font-medium text-[#3E433C] bg-transparent hover:bg-black hover:text-white transition-colors duration-300"
            >
              {isLoadingSubmit ? (
                <div className="size-6 border-t-2 border-black rounded-full animate-spin" />
              ) : (
                "Agendar"
              )}
            </button>
          </div>
        </form>
      </div> */}
    </div>
  );
}

export default Contact;
