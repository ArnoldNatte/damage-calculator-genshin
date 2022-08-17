import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {characters_show} from '../../redux/actions/fetchsToAPI/fetchsToAPI-action';

const CharactersOptions = () => {

  const [Pj, setPj] = useState("Bennett");  

  const dispatch = useDispatch();

  /*
  useEffect(() => {
    dispatch(characters_show(Pj));
  }, [Pj]);*/
  

  const getType = (e) => {
    //e.target.value && console.log(`Click a: ${e.target.value}`, e.target);
    if(e.target.value){
      setPj({type : e.target.value});
    }
}

  return (
    <div onClick={getType}>
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
/*
function mapDispatchToProps(dispatch) {
  return bindActionCreators(characterAction, dispatch);
}

export default connect(null, mapDispatchToProps)(CharactersOptions);
*/

export default CharactersOptions;
