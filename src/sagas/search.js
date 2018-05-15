import { put, takeLatest, select } from 'redux-saga/effects';
import * as t from '../constants';
import * as actions from '../actions';

function* search(action) {
  try {
    let { postReducer } = yield select();
    let searchRes = postReducer.posts.filter(post => {
      if (post.title.indexOf(action.payload.str) + 1) return true;
      if (post.body.indexOf(action.payload.str) + 1) return true;

      return false;
    });

    yield put(actions.searchResult(searchRes));
  } catch (error) {
    yield put(actions.searchResult([]));
  }
}

export default function* searchSaga() {
  yield takeLatest(t.SEARCH_REQUEST, search);
}
