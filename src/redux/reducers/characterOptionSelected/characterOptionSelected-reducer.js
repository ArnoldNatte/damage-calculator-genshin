import { OPTION_SELECTED } from "../../actions/characterOptionSelected/characterOptionSelected-action-type";

const initialState = {
  categorieToShow: "",
};

const selectCategorie = (state = initialState, action) => {
  switch (action.type) {
    case OPTION_SELECTED:
      return {
        ...state,
        categorieToShow: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default selectCategorie;
