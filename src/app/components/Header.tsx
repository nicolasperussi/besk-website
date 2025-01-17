import React from "react";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="px-5">
      <div className="py-5 pl-1 pr-4 border-b-2 border-black flex justify-between align-center">
        <div className="w-[200px]">
          <Image priority src={Logo} alt="Bergstein e Skorkowski Advogados" />
        </div>
        <div className="flex pr-4 gap-20 font-medium text-[24px] items-center">
          <Link href="#">Quem Somos</Link>
          <Link href="#">Áreas de Atuação</Link>
          <Link href="#">Conteúdo</Link>
          <Link href="#">Contato</Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
