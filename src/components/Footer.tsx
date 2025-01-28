import React from "react";

function Footer() {
  return (
    <div className="flex justify-center p-8 text-xl text-white bg-black">
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-between w-full max-w-6xl">
        <p>
          Desenvolvido por{" "}
          <span className="hover:text-[#b3c5d9] transition-colors duration-300">
            <a href="https://www.instagram.com/seiva.in/" target="_blank">
              @seiva.in
            </a>
          </span>
        </p>

        <div className="flex flex-col lg:flex-row gap-4">
          <a
            className="hover:text-[#b3c5d9] transition-colors duration-300 cursor-pointer hover:underline"
            href="/politica-de-privacidade"
          >
            Política de Privacidade
          </a>
          <a
            className="hover:text-[#b3c5d9] transition-colors duration-300 cursor-pointer hover:underline"
            href="/termos-de-uso"
          >
            Termos de Uso
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
