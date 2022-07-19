import React from 'react';
import s from './header.module.css';

import { connect } from 'react-redux'

// se pasa por parametro las props del objeto  
// que retorna la funcion mapStateToProps
const Header = ({numHeader}) => {
    return (
        <header className={`${s.header}`}>
            <h1>Esto es el Header {numHeader}</h1>
        </header>
    );
}

const mapStateToProps = state => ({
    numHeader: state.numeroHeader
});

export default connect(mapStateToProps, {})(Header);
