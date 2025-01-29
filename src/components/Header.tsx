import React from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="px-5">
      <div className="py-5 pl-1 pr-4 border-b-2 border-black flex justify-between align-center">
        <Link href="/" className="w-52">
          <Image priority src={Logo} alt="Bergstein e Skorkowski Advogados" />
        </Link>
        <div className="hidden xl:flex pr-4 gap-20 font-medium items-center">
          <Link className="hover:underline" href="/#quem-somos">
            <h5>Quem Somos</h5>
          </Link>
          <Link className="hover:underline" href="/#areas-de-atuacao">
            <h5>Áreas de Atuação</h5>
          </Link>
          <Link className="hover:underline" href="/#advogados">
            <h5>Advogados</h5>
          </Link>
          <Link className="hover:underline" href="/#conteudo">
            <h5>Conteúdo</h5>
          </Link>
          <Link className="hover:underline" href="#contato">
            <h5>Contato</h5>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
