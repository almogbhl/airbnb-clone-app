import { combineReducers } from 'redux'

import browseReducer from '../components/Main_section/Browse/Browse.reducer'

const rootReducer = combineReducers({
  browse : browseReducer
})

export default rootReducer