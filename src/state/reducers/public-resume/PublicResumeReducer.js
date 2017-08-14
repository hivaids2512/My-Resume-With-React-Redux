import { GET_PUBLIC } from "../../actions/public-resume/ActionTypes";

const initialState = {};

export default function publicResumeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PUBLIC:
      return {
        ...state,
        publicResume: action.publicResume
      };
    default:
      return state;
  }
}
