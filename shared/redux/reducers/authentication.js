import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/authetication'

export const authenticationState = {
  token: null,
  errors: null,
  isLoading: false
}

export default handleActions(
  {
    [ActionTypes.USER_LOGIN]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [ActionTypes.USER_LOGIN_SUCCESS]: (state, action) => ({
      ...state,
      token: action.payload.token,
      isLoading: false
    }),
    
    [ActionTypes.USER_LOGIN_FAILURE]: (state, action) => ({
      ...state,
      errors: {signin : action.payload.error} ,
      isLoading: false
    }),

    [ActionTypes.USER_LOGOUT]: (state, action) => { },
    
    [ActionTypes.USER_LOGOUT_SUCCESS]: (state, action) => ({
      ...state,
      token: null,
    }),

    [ActionTypes.USER_SIGNUP]: (state, action) => ({
      ...state,
      isLoading: true,
    }),

    [ActionTypes.USER_SIGNUP_FAILURE]: (state, action) => ({
      ...state,
      errors: {signup: action.payload.errors},
      token: null,
      isLoading: false,
    }),
    
    [ActionTypes.TOKEN_CHECK_SUCCESS]: (state, action) => ({
      ...state,
      userInfo: action.payload.userInfo,
      isLoading: false,
    }),
  },
  authenticationState,
)
