import React from 'react'
import { connect } from "react-redux";
import AllOrders from "./allOrders";
import DetailOrder from "./detailOrder";

const ShowOrders = ({ orders }) => {
    switch (orders.visibilityFilter) {
        case 'SHOW_DETAIL':
            return <DetailOrder/>
            break;
        default:
            return <AllOrders />
            break;
    }
}

const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps)(ShowOrders)

