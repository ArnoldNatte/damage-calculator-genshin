import React from "react";
import s from "./damageCalculator.module.css";
import CharactersOptions from "../../components/CharactersOptions/CharactersOptions";
import CharactersCardsContainer from '../../components/CharactersCardsContainer/CharactersCardsContainer';

import { useEffect } from "react";
import { connect } from "react-redux";
import {
  characters_fetchPetition,
  images_fetchPetition,
} from "../../redux/actions/fetchsToAPI/fetchsToAPI-action";

const DamageCalculator = ({
  characters_fetchPetition,
  images_fetchPetition,
}) => {
  const urlCharacters = "/index/English/characters.json";
  const urlImages = "/image/characters.json";

  //characters_fetchPetition(urlCharacters);
  //images_fetchPetition(urlImages);

  useEffect(() => {
    characters_fetchPetition(urlCharacters);
    images_fetchPetition(urlImages);
  }, []);

//useEffect(() => {characters && console.log(characters);}, [characters]);
//useEffect(() => {images && console.log(images);}, [images]);

  return (
    <section className={s.damaged_calculator}>
      <h2>Damage Calculator page!</h2>
      <CharactersOptions />
      <CharactersCardsContainer />
    </section>
  );
};

export default connect(null, {
  characters_fetchPetition,
  images_fetchPetition,
})(DamageCalculator);
