import React from 'react';
import s from './header.module.css';

import { connect } from 'react-redux'

const mapStateToProps = state => ({
    numHeader: state.numeroHeader,
    colorElejido: state.colorElejido
});

const Header = ({numHeader, colorElejido}) => {
    return (
        <header className={`${s.header}`}>
            <h1>Esto es el Header {numHeader}</h1>
            <p>el color es: {colorElejido}</p>
        </header>
    );
}

export default connect(mapStateToProps, {})(Header);
