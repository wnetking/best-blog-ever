import { call, put, takeLatest } from 'redux-saga/effects';
import * as t from '../constants';
import * as actions from '../actions';
import * as db from '../db';

function* getPosts(action) {
  try {
    let data = yield call(db.getPosts, action.payload);

    yield put(actions.getPostsSucceeded(data));
  } catch (error) {
    yield put(actions.getPostsFailed(error));
  }
}

export default function* postSaga() {
  yield takeLatest(t.GET_ALL_POSTS_REQUEST, getPosts);
}
