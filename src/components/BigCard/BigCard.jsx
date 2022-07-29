import React from "react";
import { Link } from "react-router-dom";

const BigCard = (props) => {
  const {description, thisURL} = props.datos;
  return (
    <Link className="" to={thisURL}>
      {description}
    </Link>
  );
};

export default BigCard;
