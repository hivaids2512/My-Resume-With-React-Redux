import { SECTION_LIST } from "../../actions/section/ActionTypes";

const initialState = {
};

export default function resumeReducer(state = initialState, action) {
  switch (action.type) {
    case SECTION_LIST:
      return {
        ...state,
        sections: action.sections,
      };
    default:
      return state;
  }
}
