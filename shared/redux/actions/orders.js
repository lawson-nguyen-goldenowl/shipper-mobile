/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'
import { ActionTypes } from 'redux/constants/orders'


export const { addOrder, updateOrders, setVisibility } = createActions({
    [ActionTypes.ADD_ORDER]: order => order,
    [ActionTypes.UPDATE_ORDERS]: orders => ({orders}),
    [ActionTypes.SET_VISIBILITY]: (visibility, index) => ({visibility, index}),
})
