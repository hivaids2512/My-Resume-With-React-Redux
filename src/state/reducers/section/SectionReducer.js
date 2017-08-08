import { SECTION_LIST, ADD_SECTION } from "../../actions/section/ActionTypes";

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
    default:
      return state;
  }
}
