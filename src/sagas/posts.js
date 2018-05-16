import { call, put, takeLatest } from 'redux-saga/effects'
import * as t from '../constants'
import * as actions from '../actions'
import * as db from '../db'
import merge from 'lodash/merge'
import getRandomDate from '../utils/getRandomDate'
import getRandomNumber from '../utils/getRandomNumber'

function * getPosts (action) {
  try {
    let data = yield call(db.getPosts, action.payload)

    // begin modify for realize sort by date and views
    let modifiedData = data.map(item => {
      let newItem = merge(item, {
        date: getRandomDate(new Date(2012, 0, 1), new Date()),
        view: getRandomNumber(0, 1000)
      })

      return newItem
    })
    // end modify for realize sort by date and views

    yield put(actions.getPostsSucceeded(modifiedData))
  } catch (error) {
    yield put(actions.getPostsFailed(error))
  }
}

export default function * postSaga () {
  yield takeLatest(t.GET_ALL_POSTS_REQUEST, getPosts)
}
