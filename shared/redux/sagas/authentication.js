/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from 'redux/constants/authetication'
import apiUser from "../api/apiUser";

/**
 * Login
 */

export function* login(action) {
  try {
    let response = yield apiUser.login(action.payload.email, action.payload.password)   
    if (response.success) {
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: response.success })
    } else {
      yield put({ type: ActionTypes.USER_LOGIN_FAILURE, payload: { error: response.error } })
    }

  } catch (err) {
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: { error: err }
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
/**
 * 
 * @param {action.payload.data} Signup 
 */

export function* signup(action) {
  try {
    delay(200)
    let response  = yield apiUser.signup(action.payload.data)
    if (response.success) {
      yield put({ type: ActionTypes.USER_LOGIN_SUCCESS, payload: response.success })
    } else {
      yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload: {errors: response.error}})
    }
  } catch (e) {
    console.log('catching errors' , e);
    yield put({ type: ActionTypes.USER_SIGNUP_FAILURE, payload: {errors: response.error}})
  }
}

export function* tokenCheck(action) {
  try {
    let response = yield apiUser.checkToken(action.payload.token)
    if (response.success) {
      console.log('Request success: ----> CHECK TOKEN SUCCESS')
      yield put({ type: ActionTypes.TOKEN_CHECK_SUCCESS, payload: {userInfo: response.success} })
    } else {
      console.log('Request failed: ---> ')
      yield put({ type: ActionTypes.USER_LOGOUT })
    }
  } catch (error) {
    console.log('Catching error ---> Show : Error',error)
    yield put({ type: ActionTypes.USER_LOGOUT })
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
