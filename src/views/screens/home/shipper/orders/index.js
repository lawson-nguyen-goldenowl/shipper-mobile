import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {
    View,
} from 'react-native'
import main from "styles/main";
import AllOrders from "./allOrders";
import DetailOrder from "./detailOrder";
const Orders = ({ orders }) => {

    const showOrders = visibility => {
        switch (visibility) {
            case 'SHOW_DETAIL':
                return <DetailOrder />
                break;
        
            default:
                return <AllOrders />
                break;
        }
    }

    return (
        <View style={main.wrapper}>
            {showOrders(orders.visibilityFilter)}
        </View>
    )
}

const mapStateToProps = ({ orders, authentication }) => ({ orders, authentication })
export default connect(mapStateToProps)(Orders)

