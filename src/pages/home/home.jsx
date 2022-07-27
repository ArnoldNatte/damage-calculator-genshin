import React from "react";
import BigCard from '../../components/BigCard/BigCard';
import s from "./home.module.css";

//import {connect} from 'react-redux';

const Home = () => {
  return (
    <section className={s.home}>
      <h2>Esto es la pagina Home</h2>
      <p>Escoje que quieres hacer!</p>
      <BigCard />
    </section>
  );
};

// el conecct sirve para poder conectarnos al store desde cualquier componente react!
// se escribe asi => connect(mapStateToProps, mapDispatchToProps)(*  Component  *)
// donde: mapStateToProps y mapDispatchToProps son funciones declaradas en el componente.
// si no es requerida, se reemplaza por un obj vacio ( {} )

//export default connect(mapStateToProps, mapDispatchToProps)(Home);

export default Home;
