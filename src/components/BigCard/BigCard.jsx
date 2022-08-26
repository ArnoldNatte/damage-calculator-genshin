import React from "react";
import { Link } from "react-router-dom";
import s from "./BigCard.module.scss";

const BigCard = (props) => {
  const { description, thisURL } = props.datos;
  return (
    <Link className={s.ctner} to={thisURL}>
      <div className={s.bg}></div>
      <div className={s.title}>{description}</div>
    </Link>
  );
};

export default BigCard;
