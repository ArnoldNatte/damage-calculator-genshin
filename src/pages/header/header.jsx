import React from "react";
import s from "./header.module.scss";
import { Link } from "react-router-dom";

// se pasa por parametro las props del objeto
// que retorna la funcion mapStateToProps
const Header = () => {
  return (
    <header className={`${s.header}`}>
      <h1>Home</h1>
      <Link to="/">
        <h2>Go to home</h2>
      </Link>
    </header>
  );
};

export default Header;
