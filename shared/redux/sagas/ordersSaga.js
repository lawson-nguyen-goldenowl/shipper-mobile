import { all, delay, put, takeLatest } from 'redux-saga/effects'
import { ActionTypes } from 'redux/constants/orders'
import { request } from "utilities/client";
const host = "https://api-shippers-goldenowl.herokuapp.com/api/"

/**
 * ADD ORDER
 */

function requestAddOrder(newOrder,token){
    let url = host + 'orders'
    let response = fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(newOrder)
    }).then( (res) => res.json())
    .then( (r) => r)
    return response
}

export function* addOrder(action) {
    let result = false
    let message = {result}
    try {
        delay(200)
        let response = yield requestAddOrder(action.payload.data, action.payload.token)
        if (response.success) {
            message.result = true
            let newOrder = response.success.order
            yield put({ type: ActionTypes.ADD_ORDER_SUCCESS, payload: { message, newOrder } })
        } else {
            message.result = false
            message.detail = response.error
            yield put({ type: ActionTypes.ADD_ORDER_FAILURE, payload: {message} })
        }
        
    } catch (error) {
        yield put({ type: ActionTypes.ADD_ORDER_FAILURE, payload: {message} })
    }
}

export default function* root() {
    yield all([
        takeLatest(ActionTypes.ADD_ORDER, addOrder)
    ])
}