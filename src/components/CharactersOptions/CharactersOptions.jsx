import React from "react";

const CharactersOptions = () => {

  const getTipe = (e) => {
    e.target.value && console.log(`Click a: ${e.target.value}`, e.target);
    //alert(e.currentTarget.id)
}

  return (
    <div onClick={getTipe}>
      CharactersOptions:
      <span>
        Rareza:
        <button value={4}>4*</button>
        <button value={5}>5*</button>
        |
      </span>
      <span>
        Elemento:
        <button value="Pyro">Pyro</button>
        <button value="Cryo">Cryo</button>
        <button value="Electro">Electro</button>
        <button value="Anemo">Anemo</button>
        <button value="Hydro">Hydro</button>
        <button value="Geo">Geo</button>
        |
      </span>
      <span>
        Arma:
        <button value="Sword">Espada</button>
        <button value="Claymore">Mandoble</button>
        <button value="Bow">Arco</button>
        <button value="Polearm">Lanza</button>
        <button value="Catalyst">Catalizador</button>
      </span>
    </div>
  );
};

export default CharactersOptions;
