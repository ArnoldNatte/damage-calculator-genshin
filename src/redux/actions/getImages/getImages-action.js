import AppService from '../../../services/AppService';
import { actionCreator } from 'template-redux-helpers';
import { LOADING_GETIMAGES, GET_GETIMAGES, ERROR_GETIMAGES } from './getImages-action-type';

const getImagesService = new AppService();

export const getImages = (toThisUrl) => {
    return dispatch => {
        dispatch(actionCreator(LOADING_GETIMAGES, "payload")(true));
        getImagesService.list(toThisUrl)
        .then((data) => {
            dispatch(actionCreator(GET_GETIMAGES, "payload")(data));
            dispatch(actionCreator(LOADING_GETIMAGES, "payload")(false));
        })
        .catch((error) => {
            dispatch(actionCreator(ERROR_GETIMAGES, "payload")(error));
            dispatch(actionCreator(LOADING_GETIMAGES, "payload")(false));
        })
    }
}