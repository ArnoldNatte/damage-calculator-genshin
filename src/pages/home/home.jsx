import React from "react";
import BigCard from "../../components/BigCard/BigCard";
import s from "./home.module.scss";

//import {connect} from 'react-redux';

const Home = () => {
  const datosBigCards = {
    toDamagedCalculator: {
      description: "Go to Damage Calculator",
      thisURL: "/damage-calculator",
    },
    toAboutMe: {
      description: "About the Programmer",
      thisURL: "/about",
    },
  };

  return (
    <section className={s.home}>
      <h2>Esto es la pagina Home</h2>
      <p>Escoje que quieres hacer!</p>
      <div className={s.ctnerBigCards}>
      <BigCard datos={datosBigCards.toDamagedCalculator} />
      <BigCard datos={datosBigCards.toAboutMe} />
      </div>
    </section>
  );
};

// el conecct sirve para poder conectarnos al store desde cualquier componente react!
// se escribe asi => connect(mapStateToProps, mapDispatchToProps)(*  Component  *)
// donde: mapStateToProps y mapDispatchToProps son funciones declaradas en el componente.
// si no es requerida, se reemplaza por un obj vacio ( {} )

//export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
