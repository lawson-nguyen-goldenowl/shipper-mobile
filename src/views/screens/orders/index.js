import React from 'react'
import { connect } from "react-redux"
import AllOrders from "./allOrders"
import DetailOrder from "./detailOrder"
const OrderIndex = ({ orders }) => {
    let visibility = orders.visibilityFilter
    switch (visibility) {
        case "SHOW_ALL":
            return <AllOrders /> 
        case "SHOW_DETAIL":
            return <DetailOrder />
        default:
            break;
    }
}


const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(OrderIndex)
