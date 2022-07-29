import React from "react";
import s from "./header.module.css";
import { Link } from "react-router-dom";

// se pasa por parametro las props del objeto
// que retorna la funcion mapStateToProps
const Header = () => {
  return (
    <header className={`${s.header}`}>
      <h1>Esto es el Header</h1>
      <Link to="/">Go to home</Link>
    </header>
  );
};

export default Header;
