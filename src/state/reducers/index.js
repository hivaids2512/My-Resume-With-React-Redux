import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import resumeData from './resume/ResumeReducer'
import sectionData from './section/SectionReducer'
import signInData from './sign-in/SignInReducer'
import signUpData from './sign-up/SignUpReducer'
import publicResumeData from './public-resume/PublicResumeReducer'

export default combineReducers({
  routing: routerReducer,
  resumeData,
  sectionData,
  signInData,
  signUpData,
  publicResumeData
})