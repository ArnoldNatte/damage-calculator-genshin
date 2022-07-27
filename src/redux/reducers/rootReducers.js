import { combineReducers } from "redux";
// importar los demas archivos reducers aqui :
import getCharactersReducer from './getCharacters/getCharacters-reducer';
import getImagesReducer from './getImages/getImages-reducer';

const rootReducers = combineReducers({
    //agregar aqui los distintos reducers creados
    getCharactersReducer,
    getImagesReducer
});

export default rootReducers;