import { combineReducers } from 'redux'

import postReducer from './posts'
import searchReducer from './search'
import filterReducer from './filter'

export default combineReducers({
  postReducer: postReducer,
  searchReducer: searchReducer,
  filterReducer: filterReducer
})
