import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import resumeData from './resume/ResumeReducer'
import sectionData from './section/SectionReducer'

export default combineReducers({
  routing: routerReducer,
  resumeData,
  sectionData
})