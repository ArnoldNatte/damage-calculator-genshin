import React from 'react';
import s from './CharacterCard.module.css';

const CharacterCard = (props) => {

    const pickCharacter = (e) => {
        //console.log(`Click a: ${e.currentTarget.id}`, e.currentTarget);
        alert(e.currentTarget.id)
    }


    return (
        <div key={props.id} id={props.idN} className={s.ctner} onClick={pickCharacter}>
            <img src={props.imagen} alt={`${props.name}_icon`} />
            <p>{props.name}</p>
        </div>
    );
}

export default CharacterCard;
