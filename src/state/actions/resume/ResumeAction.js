import { ADD_RESUME, RESUME_LIST, REMOVE_RESUME } from "./ActionTypes";
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

const removeResumeAction = resume => {
  return {
    type: REMOVE_RESUME,
    resume
  };
};

export function addResume(resume) {
  return dispatch => {
    ResumeService.createResume(resume)
      .then(res => {
        dispatch(addResumeAction(resume));
      })
      .catch(err => {
        dispatch(addResumeAction(resume));
      });
  };
}

export function removeResume(resume) {
  return dispatch => {
    ResumeService.removeResume(resume)
      .then(res => {
        dispatch(removeResumeAction(resume));
      })
      .catch(err => {
        console.log(err);
      });
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
