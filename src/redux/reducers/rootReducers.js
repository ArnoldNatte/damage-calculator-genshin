import { combineReducers } from "redux";
// importar los demas archivos reducers aqui :
import getCharactersReducer from './getCharacters/getCharacters-reducer';

const rootReducers = combineReducers({
    //agregar aqui los distintos reducers creados
    getCharactersReducer
});

export default rootReducers;