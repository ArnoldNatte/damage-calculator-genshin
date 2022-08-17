import getData from "../../../services/AppService";
import {
  API_FETCH_CHARACTERS,
  API_FETCH_CHARACTERS_ERROR,
  API_FETCH_IMAGES,
  API_FETCH_IMAGES_ERROR,
} from "./action-type-fetchsToAPI";

const GetData = new getData();
function fetch(post, action_type) {
  return {
    type: action_type,
    post,
  };
}
function fetchError(error, action_type) {
  return {
    type: action_type,
    error: error,
  };
}

export function characters_fetchPetition(url) {
  return function (dispatch) {
    GetData.to(url)
      .then((data) => {
        dispatch(fetch(data, API_FETCH_CHARACTERS));
      })
      .catch((error) => {
        dispatch(fetchError(error, API_FETCH_CHARACTERS_ERROR));
      });
  };
}

export function images_fetchPetition(url) {
  return function (dispatch) {
    GetData.to(url)
      .then((data) => {
        dispatch(fetch(data, API_FETCH_IMAGES));
      })
      .catch((error) => {
        dispatch(fetchError(error, API_FETCH_IMAGES_ERROR));
      });
  };
}