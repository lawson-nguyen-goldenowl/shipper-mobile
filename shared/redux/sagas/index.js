import { all, fork } from 'redux-saga/effects'

import authentication from './authentication'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(authentication)])
}
