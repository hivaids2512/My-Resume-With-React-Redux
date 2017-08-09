import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import resumeData from './resume/ResumeReducer'
import sectionData from './section/SectionReducer'
import signInData from './sign-in/SignInReducer'

export default combineReducers({
  routing: routerReducer,
  resumeData,
  sectionData,
  signInData
})