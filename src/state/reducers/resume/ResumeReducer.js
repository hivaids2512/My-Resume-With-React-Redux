import {ADD_RESUME} from '../../actions/resume/ActionTypes';

const initialState = {
  data: [],
  dataFetched: false,
  isFetching: false,
  error: false
}

export default function resumeReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_RESUME:
      return {
        ...state,
        resume: action.resume,
        data: [],
        isFetching: true
      }
    default:
      return state
  }
}
