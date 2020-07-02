/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'
import { ActionTypes } from 'redux/constants/orders'


export const { addOrder } = createActions({
    [ActionTypes.ADD_ORDER]: order => order
    ,
})
