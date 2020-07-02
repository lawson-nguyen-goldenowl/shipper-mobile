/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from 'redux/constants/authetication'
import { request } from "utilities/client";


const host = "https://api-shippers-goldenowl.herokuapp.com/api/"
/**
 * Login
 */

export function* login(action) {
  try {
    console.log('login started',action);
    
    let url = host + "login"
    let config = {
      method: 'POST',
      payload: action.payload
    }
    let response = yield request(url, config);
    
    if (response.success) {
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: response.success })
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
  let url = host + "register"
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
    delay(200)
    console.log('start');
    let response = yield signupRequest(action.payload.email, action.payload.password, action.payload.c_password, action.payload.name)
    console.log('response', response);
    if (response.success) {
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: response.success })
    } else {
      yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload: {errors: Object.assign({}, { detailErrors: response.error }, { Screen: 'SignUp' })}})
    }
  } catch (e) {
    console.log('catching errors' , e);
    
    yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload: {errors: Object.assign({}, { detailErrors: null }, { Screen: 'SignUp' })} })
  }
}

export function* tokenCheck(action) {
  try {
    let url = host + "details"
    let config = {
      headers: {
        Authorization : "Bearer " + action.payload.token
      }
    }
    let response = yield request(url, config)
    if (response.success) {
      console.log('Request success: ----> CHECK TOKEN SUCCESS')
      yield put({ type: ActionTypes.TOKEN_CHECK_SUCCESS, payload: {userInfo: response.success} })
    } else {
      console.log('Request failed: ---> ')
    }
  } catch (error) {
    console.log('Catching error ---> Show : Error')
    console.log(error)
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
    takeLatest(ActionTypes.TOKEN_CHECK, tokenCheck),
  ])
}
