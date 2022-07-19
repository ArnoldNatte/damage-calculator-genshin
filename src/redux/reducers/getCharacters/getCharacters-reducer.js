import { reducerCreator } from 'template-redux-helpers';
import { LOADING_GETCHARACTERS, GET_GETCHARACTERS, ERROR_GETCHARACTERS } from '../../actions/getCharacters/getCharacters-action-type';

const initialState = {
    isLoading: false,
    characters: [],
    status_code: null,
    error: null
}

const getCharactersReducer = {
    [LOADING_GETCHARACTERS]: (state, action) => {
        return {
            ...state,
            isLoading: action.payload
        }
    },
    [GET_GETCHARACTERS]: (state, action) => {
        return {
            ...state,
            status_code: action.payload.status,
            characters: action.payload.data
        }
    },
    [ERROR_GETCHARACTERS]: (state, action) => {
        return {
            ...state,
            error: action.payload.message
        };
    }
};

export default reducerCreator(initialState, getCharactersReducer);
