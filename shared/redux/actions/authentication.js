/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/authetication'

export const { userLogin: login, userLogout: logout, userSignup: signup, tokenCheck: tokenCheck,  } = createActions({
  [ActionTypes.USER_LOGIN]: ({email,password}) => ({
    email : "admin@gmail.com",password:"123456"
  }),

  [ActionTypes.USER_LOGOUT]: () => ({}),

  [ActionTypes.USER_SIGNUP]: (dataSignup) => (dataSignup),
  
  [ActionTypes.TOKEN_CHECK]:(token) => ({token}),
})
