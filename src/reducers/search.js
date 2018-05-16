import * as t from '../constants';

const initState = {
  data: [],
  inputEmpty: true,
  str: ''
};

const searchReducer = (state = initState, action) => {
  switch (action.type) {
    case t.SEARCH_REQUEST:
      return {
        ...state,
        ...{
          inputEmpty: false,
          str: action.payload.str
        }
      };

    case t.SEARCH_RESULT:
      return {
        ...state,
        ...action.payload
      };

    case t.SEARCH_RESULT_RESET:
      return initState;

    default:
      return state;
  }
};

export default searchReducer;
