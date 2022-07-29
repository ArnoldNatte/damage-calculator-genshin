import React from "react";
import s from "./damageCalculator.module.css";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getCharacters } from "../../redux/actions/getCharacters/getCharacters-action";
import { getImages } from "../../redux/actions/getImages/getImages-action";

const DamageCalculator = () => {
  const dispatch = useDispatch();
  const urlCharacters = "/index/English/characters.json";
  const urlImages = "/image/characters.json";
  const data = {
    characters: useSelector((state) => state.getCharactersReducer.characters),
    images: useSelector((state) => state.getImagesReducer.images),
    isLoading: useSelector((state) => state.getCharactersReducer.isLoading),
    error: useSelector((state) => state.getCharactersReducer.error),
  };
  useEffect(() => {
    dispatch(getCharacters(urlCharacters));
    dispatch(getImages(urlImages));
  }, [dispatch]);

  let arrData = [];
  if (data.images.length !== 0 && data.characters.length !== 0) {
    for (let pj in data.characters.namemap) {
      arrData.push({
        namemap: pj,
        nombre: data.characters.namemap[pj],
        images : data.images[pj]
      })
    }
  }

  return (
    <div className={s.damaged_calculator}>
      <h2>Damage Calculator page!</h2>
      <ul>
        {
          arrData.map(pj => {
            console.log(pj);
            return (
              <li>
                <img src={pj.images.icon} alt="img del pj" />
                <span>{pj.nombre}</span>
              </li>
            )
          })
        }
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
