/**
 * @module Actions/User
 * @desc User Actions
 */
import { createActions } from 'redux-actions'
import { ActionTypes } from 'redux/constants/orders'


export const { addOrder, updateOrders, setVisibilityDetail, setVisibilityShowAll } = createActions({
    [ActionTypes.ADD_ORDER]: order => order,
    [ActionTypes.UPDATE_ORDERS]: orders => ({orders}),
    [ActionTypes.SET_VISIBILITY_DETAIL]: idOrder =>({idDetail: idOrder}),
    [ActionTypes.SET_VISIBILITY_SHOW_ALL]: () => ({}),
})
