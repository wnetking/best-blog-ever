import * as t from '../constants';

const initState = {
  posts: [],
  loading: false,
  error: null
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case t.GET_ALL_POSTS_REQUEST:
      return {
        ...state,
        ...action.payload
      };

    case t.GET_ALL_POSTS_SUCCEEDED:
      return {
        ...state,
        ...action.payload
      };

    case t.GET_ALL_POSTS_FAILED:
      return {
        ...state,
        ...action.payload
      };

    default:
      return state;
  }
};

export default postReducer;
