import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/orders'

export const ordersState = {
    visibilityFilter : "SHOW_ALL",
    data: [],
    index: null,
    message: null,
    isLoading: false,
}

export default handleActions(
    {
        [ActionTypes.ADD_ORDER]: (state, action) => ({
            ...state,
            isLoading: true
        }),
        [ActionTypes.ADD_ORDER_SUCCESS]: (state, action) => ({
            ...state,
            message: action.payload.message,
            data: [
                action.payload.newOrder,
                ...state.data
            ],
            isLoading: false,
        }),
        [ActionTypes.ADD_ORDER_FAILURE]: (state, action) => ({
            ...state,
            message: action.payload.message,
            isLoading: false,
        }),
        [ActionTypes.UPDATE_ORDERS]: (state, action) => ({
            ...state,
            data: action.payload.orders
        }),
        [ActionTypes.SET_VISIBILITY]: (state, action) => ({
            ...state,
            visibilityFilter: action.payload.visibility,
            index: action.payload.index,
        }),
    },
    ordersState
)
