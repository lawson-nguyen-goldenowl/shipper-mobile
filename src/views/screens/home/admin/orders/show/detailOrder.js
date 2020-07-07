import React from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import orderStyle from "../../../../../styles/orders";
import { orders as orderActions } from "redux/actions";
import { bindActionCreators } from 'redux'

function Item(infoItem) {
    return (
        <View>
            <Text style={orderStyle.itemTitle}>{infoItem.name}</Text>
            <View style={orderStyle.itemDescription}>
                <Text style={orderStyle.itemInfo}>Order weight: {infoItem.weight}g</Text>
                <Text style={orderStyle.itemInfo}>Recipient Name: {infoItem.recipientName}</Text>
                <Text style={orderStyle.itemInfo}>Recipient Phone: {infoItem.recipientPhone} </Text>
            </View>
        </View>
    );
}

const DetailOrder = ({ orders, setVisibilityShowAll }) => {
    const order = orders.data[orders.idDetail]
    return (
        <View style={orderStyle.bgDetaiil}>
            <TouchableOpacity 
                onPress={() => setVisibilityShowAll() }
                style={orderStyle.btnBg}>
                <Text style={orderStyle.btnTitle}>Show All Orders</Text>
            </TouchableOpacity>
            {Item(order)}
        </View>
    )
}


const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setVisibilityShowAll: orderActions.setVisibilityShowAll
    },
    dispatch,
)
const mapStateToProps = ({ orders }) => ({ orders })
export default connect(mapStateToProps, mapDispatchToProps)(DetailOrder)

