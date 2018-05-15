import { fork, all } from 'redux-saga/effects';

import postSaga from './posts';
import searchSaga from './search';

export default function* rootSagas() {
  yield all([fork(postSaga), fork(searchSaga)]);
}
