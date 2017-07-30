import { ADD_RESUME } from "./ActionTypes";

export const addResumeAction = resume => {
  return {
    type: ADD_RESUME,
    resume
  };
};

export function addResume(resume) {
  return dispatch => {
    dispatch(addResumeAction(resume));
  };
}
