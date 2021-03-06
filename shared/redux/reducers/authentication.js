import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/authetication'

export const authenticationState = {
  token: null,
  errors: null,
}

export default handleActions(
  {
    [ActionTypes.USER_LOGIN]: (state, action) => ({}),

    [ActionTypes.USER_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      token: action.payload.token
    }),

    [ActionTypes.USER_LOGOUT]: (state, action) => { },
    
    [ActionTypes.USER_LOGOUT_SUCCESS]: (state, action) => ({
      ...state,
      token: null,
    }),

    [ActionTypes.USER_SIGNUP]: (state, action) => ({}),

    [ActionTypes.USER_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      errors: action.payload.errors,
      token: null,
    }),
    
    [ActionTypes.TOKEN_CHECK_SUCCESS]: (state, action) => ({
      ...state,
      userInfo: action.payload.userInfo
    }),
  },
  authenticationState,
)
