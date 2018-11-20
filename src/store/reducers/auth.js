import {
  TRY_AUTH
} from "../actions/actionTypes";

const initialState = {
  userName: 'elad'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TRY_AUTH:
      return {
        ...state,
        userName: action.authData
      }
    default:
      return state;
  }
};

export default reducer;
