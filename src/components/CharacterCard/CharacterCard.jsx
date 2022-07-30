import React from 'react';
import s from './CharacterCard.module.css';

const CharacterCard = (props) => {
    return (
        <div className={s.ctner}>
            <img src={props.imagen} alt={`${props.name} icon`} />
            <p>{props.name}</p>
        </div>
    );
}

export default CharacterCard;
