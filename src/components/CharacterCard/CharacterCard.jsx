import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import s from "./CharacterCard.module.css";

const CharacterCard = ({ data }) => {
  //const [DataArr, setDataArr] = useState(null);
  //const dispatch = useDispatch();

  useEffect(() => {
    //data.length !== 0 && console.log(data);
  }, [data]);

  const pickCharacter = () => {
    //console.log(`Click a: ${e.currentTarget.id}`, e.currentTarget);
    console.log(data.name);
  };

  return (
    <li className={s.ctner} onClick={pickCharacter} id={data.id}>
      {data.length !== 0 ? (
        <>
          <img src={data.image} alt="" />
          <p>{data.name}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </li>
  );
};

export default CharacterCard;
