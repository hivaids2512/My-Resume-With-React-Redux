import { ADD_RESUME, RESUME_LIST } from "../../actions/resume/ActionTypes";

const initialState = {
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESUME:
      return {
        ...state,
        resume: action.resume,
      };
    case RESUME_LIST:
      return {
        ...state,
        resumes: action.resumes,
      };
    default:
      return state;
  }
}
