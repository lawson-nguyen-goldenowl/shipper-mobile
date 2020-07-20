import React from 'react'
import { connect } from "react-redux"
import { View, Text } from "react-native"
import AllOrders from "./allOrders"
import DetailOrder from "./detailOrder"
import Map from "./maps";
const OrderIndex = ({ orders }) => {
    // let visibility = orders.visibilityFilter
    // switch (visibility) {
    //     case "SHOW_ALL":
    //         return <AllOrders /> 
    //     case "SHOW_DETAIL":
    //         return <DetailOrder />
    //     default:
    //         break;
    // }
    return <Map />
}


const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(OrderIndex)
