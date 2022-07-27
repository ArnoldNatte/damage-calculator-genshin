import AppService from '../../../services/AppService';
import { actionCreator } from 'template-redux-helpers';
import { LOADING_GETCHARACTERS, GET_GETCHARACTERS, ERROR_GETCHARACTERS } from './getCharacters-action-type';

const getCharactersService = new AppService();

export const getCharacters = (toThisUrl) => {
    return dispatch => {
        dispatch(actionCreator(LOADING_GETCHARACTERS, "payload")(true));
        getCharactersService.list(toThisUrl)
        .then((data) => {
            dispatch(actionCreator(GET_GETCHARACTERS, "payload")(data));
            dispatch(actionCreator(LOADING_GETCHARACTERS, "payload")(false));
        })
        .catch((error) => {
            dispatch(actionCreator(ERROR_GETCHARACTERS, "payload")(error));
            dispatch(actionCreator(LOADING_GETCHARACTERS, "payload")(false));
        })
    }
}