import { AUTHENTICATE } from "../../actions/sign-in/ActionTypes";

const initialState = {
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}
