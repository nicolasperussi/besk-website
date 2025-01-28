import React from "react";

function TermsOfUse() {
  return (
    <div className="mx-auto max-w-6xl py-16 px-8 sm:p-16 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <h2 className="mb-2">Termos de uso</h2>
        <p className="text-lg indent-8 leading-6">
          O website de Bergstein Skorkowski Advogados (
          <a
            href="www.besk.com.br"
            className="hover:text-secondary transition-colors duration-300 cursor-pointer hover:underline"
          >
            www.besk.com.br
          </a>
          ) tem como objetivo fornecer informações institucionais sobre o
          escritório e seus integrantes.
        </p>
        <p className="text-lg indent-8 leading-6">
          O conteúdo disponibilizado não pode e nem deve ser interpretado como
          aconselhamento jurídico, visto que os boletins institucionais e
          artigos divulgados possuem intuito exclusivamente informativo.
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <h2 className="mb-2">Direitos Autorais</h2>
        <p className="text-lg indent-8 leading-6">
          Todos os materiais exibidos neste site estão protegidos pelas leis de
          Propriedade Intelectual e não podem ser reproduzidos e/ou distribuídos
          sem a expressa autorização de Bergstein Skorkowski Advogados.
        </p>
      </div>
    </div>
  );
}

export default TermsOfUse;
