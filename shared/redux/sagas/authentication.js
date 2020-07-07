/**
 * @module Sagas/User
 * @desc User
 */

import { all, delay, put, takeLatest } from 'redux-saga/effects'

import { ActionTypes } from 'redux/constants/authetication'
import { request } from "utilities/client";
import apiUser from "../api/apiUser";

const host = "https://api-shippers-goldenowl.herokuapp.com/api/"
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
    /* istanbul ignore next */
    yield put({
      type: ActionTypes.USER_LOGIN_FAILURE,
      payload: { error: response.error }
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

export function* signup(action) {
  try {
    delay(200)
    console.log('start');
    let response  = yield apiUser.signup(action.payload)
    console.log('response', response);
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
