import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import appData from './Resume/ResumeReducer'

export default combineReducers({
  routing: routerReducer,
  appData
})