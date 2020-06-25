/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from 'redux/constants/authetication'

/**
 * Login
 */
loginRequest = async (email, password) => {
  let url = "https://api-shippers-goldenowl.herokuapp.com/api/login"
  let response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  }).then((res) => res.json())
    .then((res_2) => { return res_2 })
  return response
}

export function* login(action) {
  try {
    let response = yield loginRequest(action.payload.email, action.payload.password);

    if (response.success) {
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: { userInfo: response.success.userInfo } })
    }

  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: err,
    })
  }
}

/**
 * Logout
 */
export function* logout() {
  try {
    yield delay(200)

    yield put({ type: ActionTypes.USER_LOGOUT_SUCCESS })
  } catch (err) {
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGOUT_FAILURE,
      payload: err,
    })
  }
}

signupRequest = (email, password, c_password, name) => {
  let url = "https://api-shippers-goldenowl.herokuapp.com/api/register"
  let response = fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
      c_password,
      name
    })
  }).then((res) => res.json())
    .then((res_2) => { return res_2 })
  return response
}

export function* signup(action) {
  try {
    console.log('start ---> wating response');
    let response = yield signupRequest(action.payload.email, action.payload.password, action.payload.c_password, action.payload.name);
    console.log('get response ---> caculate result', response)
    if (response.success) {
      console.log('signup success --> action user sign up success');
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: response.success })
    } else {
      console.log('sign up error -> action user sign up error');
      yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload:{errors : Object.assign({},{detailErrors : response.error},{Screen:'SignUp'}) }})
    }
  } catch (error) {
    console.log('sign up another error ', error);
    yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload: error })
  }
}

/**
 * User Sagas
 */
export default function* root() {
  yield all([
    takeLatest(ActionTypes.USER_LOGIN, login),
    takeLatest(ActionTypes.USER_LOGOUT, logout),
    takeLatest(ActionTypes.USER_SIGNUP, signup),
  ])
}
