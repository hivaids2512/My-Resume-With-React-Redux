import { GET_PUBLIC } from "./ActionTypes";
import PublicResumeService from "../../../services/PublicResumeService";

const getPublicResumeAction = publicResume => {
  return {
    type: GET_PUBLIC,
    publicResume
  };
};

export function getPublicResume(resumeId) {
  return dispatch => {
    PublicResumeService.getPublicResume(resumeId)
      .then(res => {
        if (res.status === 200) {
          dispatch(getPublicResumeAction(res.data));
        }
      })
      .catch(err => {
        console.log(err);
      });
  };
}
