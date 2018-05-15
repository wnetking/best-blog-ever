import * as t from '../constants';

const initState = [];

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case t.SEARCH_REQUEST:
      return [...state];

    case t.SEARCH_RESULT:
      return [...action.payload.data];

    case t.SEARCH_RESULT_RESET:
      return [];

    default:
      return state;
  }
};

export default searchReducer;
