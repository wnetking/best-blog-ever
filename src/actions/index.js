import * as t from '../constants';

export const getPostsRequest = () => ({
  type: t.GET_ALL_POSTS_REQUEST,
  payload: {
    loading: true
  }
});

export const getPostsSucceeded = data => ({
  type: t.GET_ALL_POSTS_SUCCEEDED,
  payload: {
    posts: data,
    loading: false
  }
});

export const getPostsFailed = error => ({
  type: t.GET_ALL_POSTS_FAILED,
  payload: {
    error: error
  }
});

export const searchRequest = str => ({
  type: t.SEARCH_REQUEST,
  payload: {
    str
  }
});

export const searchResult = data => ({
  type: t.SEARCH_RESULT,
  payload: {
    data
  }
});

export const searchResultReset = () => ({
  type: t.SEARCH_RESULT_RESET,
  payload: {}
});
