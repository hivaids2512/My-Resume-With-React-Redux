import { SECTION_LIST, ADD_SECTION, REMOVE_SECTION, EDIT_SECTION } from "./ActionTypes";
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

const removeSectionAction = section => {
  return {
    type: REMOVE_SECTION,
    section
  };
};

const editSectionAction = section => {
  return {
    type: EDIT_SECTION,
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

export function removeSection(resumeId, section) {
  return dispatch => {
    SectionService.removeSection(resumeId ,section)
      .then(res => {
        dispatch(removeSectionAction(section));
      })
      .catch(err => {
        console.log(err);
      });
  };
}

export function editSection(resumeId, section) {
  return dispatch => {
    SectionService.editSection(resumeId, section)
      .then(res => {
        dispatch(editSectionAction(section));
      })
      .catch(err => {
        console.log(err);
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
