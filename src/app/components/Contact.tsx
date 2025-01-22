"use client";
import React, { useState } from "react";

import Image from "next/image";
import Logo from "../../../public/logo-symbol.svg";

function Contact() {
  const [isLoadingSubmit, setIsLoadingSubmit] = useState(false);
  return (
    <div>
      <div className="mx-auto max-w-6xl pt-24 pb-20 flex gap-10">
        <div className="flex flex-col gap-12 flex-1">
          <div className="h-48">
            <Image priority src={Logo} alt="Bergstein e Skorkowski Advogados" />
          </div>
          <div className="flex flex-col gap-2 max-w-fit">
            <a
              href="mailto:contato@besk.com.br"
              className="hover:text-white transition-all duration-300 !font-medium !text-xl"
            >
              contato@besk.com.br
            </a>
            <h1 className="!font-medium !text-xl">Rua Gustavo Teixeira, 273</h1>
            <h1 className="!font-medium !text-xl">
              Pacaembu/SP - CEP 01236-010
            </h1>
            <h1 className="!font-medium !text-xl">+55 (11) 3873-3785</h1>
            <a
              href="tel:11982457385"
              className="hover:text-white transition-all duration-300 !font-medium !text-xl"
            >
              +55 (11) 9 8245-7385
            </a>
          </div>
        </div>
        <div id="form" className="flex flex-col gap-4 flex-1">
          <h1 className="font-medium text-2xl">Fale conosco</h1>
          <form className="max-w-md flex flex-col gap-4">
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
                className="border-2 border-black h-12 w-40 px-4 py-2 font-medium text-[#3E433C] bg-transparent hover:bg-black hover:text-white transition-colors duration-300"
              >
                Agendar
              </button>
              {isLoadingSubmit && (
                <div className="size-6 border-t-2 border-black rounded-full animate-spin"></div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
