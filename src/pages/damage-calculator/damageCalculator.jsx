import React from "react";
import s from "./damageCalculator.module.css";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import CharactersOptions from "../../components/CharactersOptions/CharactersOptions";

import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getCharacters } from "../../redux/actions/getCharacters/getCharacters-action";
import { getImages } from "../../redux/actions/getImages/getImages-action";

const DamageCalculator = () => {
  const dispatch = useDispatch();
  const urlCharacters = "/index/English/characters.json";
  const urlImages = "/image/characters.json";
  const characters = useSelector(
    (state) => state.getCharactersReducer.characters,
    shallowEqual
  );
  //const charactersIsLoading = useSelector((state) => state.getCharactersReducer.isLoading, shallowEqual);
  //const charactersError = useSelector((state) => state.getCharactersReducer.error, shallowEqual);
  const images = useSelector(
    (state) => state.getImagesReducer.images,
    shallowEqual
  );
  //const imagesIsLoading = useSelector((state) => state.getImagesReducer.isLoading, shallowEqual);
  //const imagesError = useSelector((state) => state.getImagesReducer.error, shallowEqual);
  useEffect(() => {
    dispatch(getCharacters(urlCharacters));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getImages(urlImages));
  }, [dispatch]);

  const showCharacters = () => {
    let charactersToShow = [];
    let id = 0;
    //images && console.log("img",images);
    for (let x in characters.namemap) {
      let img = images[x].icon;

      //console.log(images[x].icon, x);

      let el = <CharacterCard key={id} name={characters.namemap[x]} imagen={img} />;
      charactersToShow.push(el);
      id = id + 1;
      //console.log("el", el);
    }
    return <>{charactersToShow && charactersToShow.map((el) => el)}</>;
  };

  return (
    <div className={s.damaged_calculator}>
      <h2>Damage Calculator page!</h2>
      <CharactersOptions />
      <ul className={s.ctnerCards}>
        {images.length !== 0 && showCharacters()}
      </ul>
    </div>
  );
};
/*
const mapStateToProps = state => ({
    loading: state.isLoading
});*/

export default DamageCalculator;
//export default connect(mapStateToProps, {})(DamageCalculator);
