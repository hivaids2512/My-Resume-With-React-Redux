import { ADD_RESUME, RESUME_LIST, REMOVE_RESUME } from "../../actions/resume/ActionTypes";

const initialState = {};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_RESUME:
      state.resumes.unshift(action.resume)
      return {
        ...state,
        resume: action.resume,
        resumes: state.resumes
      };
    case RESUME_LIST:
      return {
        ...state,
        resumes: action.resumes
      };
    case REMOVE_RESUME:
      return {
        ...state,
        deletedResume: action.resume,
        resumes: state.resumes.slice(1)
      };
    default:
      return state;
  }
}
