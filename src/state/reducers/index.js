import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appData from './resume/ResumeReducer'

export default combineReducers({
  routing: routerReducer,
  appData
})