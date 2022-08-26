import React from "react";
import { connect } from "react-redux";

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

import CharactersOptionSelected from "../../redux/actions/characterOptionSelected/characterOptionSelected-action";
import s from "./CharactersOptions.module.css";

const CharactersOptions = ({
  characters,
  CharactersOptionSelected,
  categorieSelected,
}) => {
  const [Properties, setProperties] = useState(null);
  //const dispatch = useDispatch();

  useEffect(() => {
    //console.log(characters);
    if (characters !== null) {
      setProperties(characters.properties);
    }
  }, [characters]);

  useEffect(() => {
    return () => {
      CharactersOptionSelected("");
    };
  }, []);

  const getType = (e) => {
    if (e.target.name !== undefined) {
      if (e.target.name === categorieSelected) {
        CharactersOptionSelected("");
      } else {
        CharactersOptionSelected(e.target.name);
      }
    }
    //e.target.name && console.log(`Click a: ${e.target.name}`, e.target);
    //console.log(e.target.name);
  };

  return (
    <div onClick={getType} className={s.ctner}>
      CharactersOptions:
      {Properties !== null &&
        Properties.element.map((t, index) => (
          <button key={index} name={t}>
            {t}
          </button>
        ))}
      {Properties !== null &&
        Properties.rarity.map((t, index) => (
          <button key={index} name={t}>
            {t}
          </button>
        ))}
      {Properties !== null &&
        Properties.weapontype.map((t, index) => (
          <button key={index} name={t}>
            {t}
          </button>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.FetchsToAPI.characters.data,
  categorieSelected: state.selectCategorie.categorieToShow,
});

export default connect(mapStateToProps, { CharactersOptionSelected })(
  CharactersOptions
);
