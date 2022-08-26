import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { connect } from "react-redux";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import s from "./CharactersCardsContainer.module.css";

function getAtr(properties, cat, el) {
  let resp = null;
  properties.map((y) => {
    if (cat[y].includes(el)) {
      resp = y;
    }
  });
  return resp;
}

const CharactersCardsContainer = ({
  characters,
  images,
  categorieSelected,
}) => {
  const [Data, setData] = useState(null);

  useEffect(() => {
    if (characters !== null && images !== null) {
      //console.log(characters, images);
      let obj = {};
      let categories = characters.categories;
      let properties = characters.properties;

      let arr = [];
      if (categorieSelected === "") {
        arr = Object.values(characters.names);
        //console.log("> ",categorieSelected);
        //arr = categories[categorieSelected];
      } else {
        arr = categories[categorieSelected];
      }
      let id = 1;
      arr.map((x) => {
        obj[x] = {
          name: characters.namemap[x],
          id: id++,
          rango: getAtr(properties.rarity, categories, x),
          weapon: getAtr(properties.weapontype, categories, x),
          element: getAtr(properties.element, categories, x),
          image: images[x].icon,
        };
      });
      //console.log(obj);
      let array = [];
      for (let k in obj) {
        array.push(obj[k]);
      }
      //console.log(array);
      setData(array);
    }
  }, [characters, images, categorieSelected]);

  return (
    <div className={s.ctner}>
      this is CharactersCardsContainer!
      <br />
      {Data !== null &&
        Data.map((pj) => <CharacterCard key={pj.id} data={pj} />)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  characters: state.FetchsToAPI.characters.data,
  images: state.FetchsToAPI.images.data,
  categorieSelected: state.selectCategorie.categorieToShow,
});

//export default CharactersCardsContainer;
export default connect(mapStateToProps, {})(CharactersCardsContainer);
