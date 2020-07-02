import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/orders'

export const ordersState = {
    visibilityFilter : "SHOW_ALL",
    data: [],
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
    },
    ordersState
)