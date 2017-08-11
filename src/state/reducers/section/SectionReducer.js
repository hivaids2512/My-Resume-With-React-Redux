import { SECTION_LIST, ADD_SECTION, REMOVE_SECTION, EDIT_SECTION } from "../../actions/section/ActionTypes";

const initialState = {
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case SECTION_LIST:
      return {
        ...state,
        sections: action.sections,
      };
    case ADD_SECTION:
      state.sections.unshift(action.section)
      return {
        ...state,
        section: action.section,
        sections: state.sections
      };
    case REMOVE_SECTION:
      return {
        ...state,
        deletedSection: action.section,
        sections: state.sections.filter(section => { return section.id !== action.section.id })
      }; 
    case EDIT_SECTION:
      return {
        ...state,
        editedSection: action.section,
        sections: state.sections
      }; 
    default:
      return state;
  }
}
