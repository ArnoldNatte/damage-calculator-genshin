import { combineReducers } from "redux";
// importar los demas archivos reducers aqui :
//import getCharactersReducer from "./getCharacters/getCharacters-reducer";
//import getImagesReducer from "./getImages/getImages-reducer";
import FetchsToAPI from "./fetchsToAPI/character-reducer";

const rootReducers = combineReducers({
  //agregar aqui los distintos reducers creados
  FetchsToAPI,
  //getCharactersReducer,
  //getImagesReducer,
});

export default rootReducers;
