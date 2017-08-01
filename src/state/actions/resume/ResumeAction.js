import { ADD_RESUME, RESUME_LIST } from "./ActionTypes";
import ResumeService from "../../../services/ResumeService";

const addResumeAction = resume => {
  return {
    type: ADD_RESUME,
    resume
  };
};

const getResumeListAction = resumes => {
  return {
    type: RESUME_LIST,
    resumes
  };
};

export function addResume(resume) {
  return dispatch => {
    dispatch(addResumeAction(resume));
  };
}

export function getResumeList() {
  return dispatch => {
    ResumeService.getResumeList()
      .then(res => {
        dispatch(getResumeListAction(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
