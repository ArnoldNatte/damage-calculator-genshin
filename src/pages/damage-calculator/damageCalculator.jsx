import React from "react";
import s from "./damageCalculator.module.css";
//import { useEffect }  from 'react';
//import { useDispatch, useSelector } from "react-redux";
//import { getCharacters } from '../../redux/actions/getCharacters/getCharacters-action';
//import {connect} from 'react-redux';

const DamageCalculator = (props) => {
  let { namemap } = props.datos;
  console.log(namemap);

  let a = [];
  if (props.datos.namemap) {
    Object.values(props.datos.namemap).map((x) => a.push(x));
    //console.log(props.datos.namemap);
  }

  return (
    <div className={s.damaged_calculator}>
      <h2>Damage Calculator page!</h2>
      <ul>
        {props.datos.namemap ? (
          a.map((x) => (
            <li key={a.indexOf(x) + 1}>
              {x} / index = {a.indexOf(x) + 1}
            </li>
          ))
        ) : (
          <li>No se encontro nada</li>
        )}
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
