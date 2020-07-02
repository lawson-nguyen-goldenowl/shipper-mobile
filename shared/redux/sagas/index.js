import { all, fork } from 'redux-saga/effects'

import authentication from './authentication'
import orders from './ordersSaga'

/**
 * rootSaga
 */
export default function* root() {
  yield all([
    fork(authentication),
    fork(orders)
  ])
}

