import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/authetication'

export const authenticationState = { isAuthenticated: false, errors: null }

export default handleActions(
  {
    [ActionTypes.USER_LOGIN]: (state, action) => {},
    [ActionTypes.USER_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      isAuthenticated: true,
      userInfo: action.payload.userInfo
    }),
    [ActionTypes.USER_LOGOUT]: (state, action) => { },
    [ActionTypes.USER_LOGOUT_SUCCESS]: (state, action) => ({
      ...state,
      isAuthenticated: false,
    }),
    [ActionTypes.USER_SIGNUP]: (state, action) => {},
    [ActionTypes.USER_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      errors: action.payload.errors
    }),
  },
  authenticationState,
)
