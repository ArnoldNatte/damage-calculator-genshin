import { reducerCreator } from 'template-redux-helpers';
import { LOADING_GETIMAGES, GET_GETIMAGES, ERROR_GETIMAGES } from '../../actions/getImages/getImages-action-type';

const initialState = {
    isLoading: false,
    images: [],
    status_code: null,
    error: null
}

const getImagesReducer = {
    [LOADING_GETIMAGES]: (state, action) => {
        return {
            ...state,
            isLoading: action.payload
        }
    },
    [GET_GETIMAGES]: (state, action) => {
        return {
            ...state,
            status_code: action.payload.status,
            images: action.payload.data
        }
    },
    [ERROR_GETIMAGES]: (state, action) => {
        return {
            ...state,
            error: action.payload.message
        };
    }
};

export default reducerCreator(initialState, getImagesReducer);
