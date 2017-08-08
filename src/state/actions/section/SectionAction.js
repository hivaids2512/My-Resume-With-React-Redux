import { SECTION_LIST, ADD_SECTION } from "./ActionTypes";
import SectionService from "../../../services/SectionService";

const getSectionListAction = sections => {
  return {
    type: SECTION_LIST,
    sections
  };
};

const addSectionAction = section => {
  return {
    type: ADD_SECTION,
    section
  };
};

export function addSection(resumeId, section) {
  return dispatch => {
    SectionService.createSection(resumeId, section)
      .then(res => {
        dispatch(addSectionAction(section));
      })
      .catch(err => {
        dispatch(addSectionAction(section));
      });
  };
}

export function getSectionList(resumeId) {
  return dispatch => {
    SectionService.getSectionList(resumeId)
      .then(res => {
        dispatch(getSectionListAction(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
