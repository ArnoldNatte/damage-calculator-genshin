import {
  API_FETCH_CHARACTERS,
  API_FETCH_CHARACTERS_ERROR,
  API_FETCH_IMAGES,
  API_FETCH_IMAGES_ERROR,
} from "../../actions/fetchsToAPI/action-type-fetchsToAPI";

const initialState = {
  characters: {
    data: null,
    message: "",
  },
  images: {
    data: null,
    message: "",
  },
};

const FetchsToAPI = (state = initialState, action) => {
  switch (action.type) {
    case API_FETCH_CHARACTERS:
      return {
        ...state,
        characters: {
          data: action.post.data,
          message: "All Good! code 200",
        },
      };
    case API_FETCH_CHARACTERS_ERROR:
      return {
        ...state,
        characters: {
          data: null,
          message: action.error.message,
        },
      };
    case API_FETCH_IMAGES:
      return {
        ...state,
        images: {
          data: action.post.data,
          message: "All Good! code 200",
        },
      };
    case API_FETCH_IMAGES_ERROR:
      return {
        ...state,
        images: {
          data: null,
          message: action.error.message,
        },
      };
    default:
      return { ...state };
  }
};

export default FetchsToAPI;
