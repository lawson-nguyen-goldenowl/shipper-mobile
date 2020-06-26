import { keyMirror } from 'utilities/helpers'

/**
 * @namespace Constants
 * @desc App constants
 */

/**
 * @constant {Object} ActionTypes
 * @memberof Constants
 */
export const ActionTypes = keyMirror({
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,
  USER_SIGNUP: undefined,
  USER_SIGNUP_FAILURE: undefined,
  TOKEN_CHECK: undefined,
  TOKEN_CHECK_SUCCESS: undefined
})
