import { combineReducers } from 'redux';

import postReducer from './posts';
import searchReducer from './search';

export default combineReducers({
  postReducer: postReducer,
  searchReducer: searchReducer
});
