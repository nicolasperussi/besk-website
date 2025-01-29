"use client";
import React, { useEffect, useState } from "react";
import Logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaXmark } from "react-icons/fa6";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function openMenu() {
    setIsOpen(true);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    setTimeout(() => {
      document.body.style.overflow = "hidden";
    }, 500); // Wait for animation to complete
  }

  function closeMenu() {
    setIsOpen(false);
    document.body.style.overflow = "";
  }

  return (
    <header className="px-5">
      <div className="py-5 pl-1 pr-4 border-b-2 border-black flex justify-between items-center">
        <Link href="/" className="w-52">
          <Image priority src={Logo} alt="Bergstein e Skorkowski Advogados" />
        </Link>
        <div
          className={`w-screen h-screen absolute ${
            isOpen ? "left-0" : "-left-full"
          } top-0 z-50 bg-primary flex flex-col justify-center pr-4 gap-20 font-medium items-center transition-all duration-300 xl:flex xl:w-auto xl:h-auto xl:relative xl:flex-row xl:left-0`}
        >
          <FaXmark
            onClick={closeMenu}
            className="xl:hidden cursor-pointer absolute right-8 top-12"
            size={32}
          />
          <Link
            onClick={closeMenu}
            className="hover:underline"
            href="/#quem-somos"
          >
            <h5>Quem Somos</h5>
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:underline"
            href="/#areas-de-atuacao"
          >
            <h5>Áreas de Atuação</h5>
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:underline"
            href="/#advogados"
          >
            <h5>Advogados</h5>
          </Link>
          <Link
            onClick={closeMenu}
            className="hover:underline"
            href="/#conteudo"
          >
            <h5>Conteúdo</h5>
          </Link>
          <Link onClick={closeMenu} className="hover:underline" href="#contato">
            <h5>Contato</h5>
          </Link>
        </div>
        <FaBars
          onClick={openMenu}
          className="xl:hidden cursor-pointer"
          size={32}
        />
      </div>
    </header>
  );
}

export default Header;
