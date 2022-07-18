import React from 'react';
import s from './home.module.css';

import {connect} from 'react-redux';

const Home = ({numeroHomeComp, colores, pintarDelColor}) => {
    return (
        <div className={s.home}>
            <h2>Esto es la pagina Home</h2>
            <p>Escoje que quieres hacer! {numeroHomeComp}</p>

            <div>{colores.map(x => (
                <button onClick={() => pintarDelColor(x)} 
                key={x.id}>
                    {x.color}
                </button>
            ))}</div>

        </div>
    );
}

const mapStateToProps = state => ({
    numeroHomeComp: state.numeroHome,
    colores: state.colores
});

const mapDispatchToProps = dispatch => ({
    pintarDelColor(color) {
        dispatch({
            type: "CAMBIAR_COLOR",
            color
        })
    }
})

// el conecct sirve para poder conectarnos al store desde cualquier componente react!
// se escribe asi => connect(mapStateToProps, mapDispatchToProps)(*  Component  *)
// donde: mapStateToProps y mapDispatchToProps son funciones declaradas en el componente. 
// si no es requerida, se reemplaza por un obj vacio ( {} )
export default connect(mapStateToProps, mapDispatchToProps)(Home);
