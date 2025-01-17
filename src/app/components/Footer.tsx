import React from "react";

function Footer() {
  return (
    <div className="flex items-center justify-center p-8 text-[20px] text-white bg-black">
      <p>
        Desenvolvido por{" "}
        <span className="hover:text-[#b3c5d9] transition-colors duration-300">
          <a href="https://www.instagram.com/seiva.in/" target="_blank">
            @seiva.in
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer;
