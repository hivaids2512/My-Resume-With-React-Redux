import { REGISTER } from "../../actions/sign-up/ActionTypes";

const initialState = {
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        registeredUser: action.user,
      };
    default:
      return state;
  }
}
