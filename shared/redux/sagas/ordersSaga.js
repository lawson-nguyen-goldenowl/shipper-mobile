import { all, delay, put, takeLatest } from 'redux-saga/effects'
import { ActionTypes } from 'redux/constants/orders'
import { request } from "utilities/client";
const host = "https://api-shippers-goldenowl.herokuapp.com/api/"

/**
 * ADD ORDER
 */

export function* addOrder(action) {
    try {
        console.log('----- Starting Action :',action.type,'-----')
        console.log('----- Config API -----')
        let url = host + 'orders'
        let config = {
            method: 'POST',
            payload: action.payload.data,
            headers: {
                Authorization: `Bearer ${action.payload.token}`
            }
        }
        console.log('----- Starting request and Waitting Response')
        let response = yield request(url, config)
        console.log('----- Getting Response then show Response',response)
    } catch (error) {
        console.log('Saga error...', error)

    }
}

export default function* root() {
    yield all([
        takeLatest(ActionTypes.ADD_ORDER, addOrder)
    ])
}