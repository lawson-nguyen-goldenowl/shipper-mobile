import { handleActions } from 'redux-actions'

import { ActionTypes } from 'redux/constants/orders'

export const ordersState = {
    visibilityFilter : "SHOW_ALL",
    data: [],
}

export default handleActions(
    {
        [ActionTypes.ADD_ORDER]: (state, action) => console.log('reducers')
,
    },
    ordersState
)
