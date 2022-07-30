import React from "react";

const CharactersOptions = () => {
  return (
    <div>
      CharactersOptions:
      <span>
        Rareza:
        <button>4*</button>
        <button>5*</button>
        |
      </span>
      <span>
        Elemento:
        <button>Pyro</button>
        <button>Cryo</button>
        <button>Electro</button>
        <button>Anemo</button>
        <button>Hydro</button>
        <button>Geo</button>
        |
      </span>
      <span>
        Arma:
        <button>Espada</button>
        <button>Mandoble</button>
        <button>Arco</button>
        <button>Lanza</button>
        <button>Catalizador</button>
      </span>
    </div>
  );
};

export default CharactersOptions;
