import { SECTION_LIST } from "./ActionTypes";
import SectionService from "../../../services/SectionService";

const getSectionListAction = sections => {
  return {
    type: SECTION_LIST,
    sections
  };
};

export function getSectionList(resumeId) {
  return dispatch => {
    SectionService.getSectionList(resumeId)
      .then(res => {
        dispatch(getSectionListAction(res.data));
      })
      .catch(err => {
          console.log(err)
      });
  };
}
