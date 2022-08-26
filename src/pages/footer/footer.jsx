import React from 'react';
import s from './footer.module.scss';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <h3 className={s.footer__h3}>programado por: <strong><a href="https://github.com/ArnoldNatte" className={s.a_link}>Dorian Principe</a></strong></h3>
        </footer>
    );
}

export default Footer;
