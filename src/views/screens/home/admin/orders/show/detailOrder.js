import React from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
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
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Status: </Text> 
                    {infoItem.status} 
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Order weight: </Text>
                    {infoItem.weight}g
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Description: </Text>
                    {infoItem.description}
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Recipient Name: </Text>
                    {infoItem.recipientName}
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Recipient Phone: </Text>
                    {infoItem.recipientPhone} 
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Recipient Addresss: </Text>
                    {infoItem.recipientAddress} 
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Shipper: </Text>
                    {infoItem.idShipper} 
                </Text>
                <Text style={orderStyle.itemInfo}>
                    <Text style={orderStyle.itemLable}>Created: </Text>
                    {infoItem.created_at} 
                </Text>
            </View>
        </View>
    );
}

const DetailOrder = ({ orders, setVisibilityShowAll }) => {
    const order = orders.data[orders.idDetail]
    console.log(order);
    
    return (
        <View style={orderStyle.bgDetaiil}>
            <TouchableOpacity
                onPress={() => setVisibilityShowAll()}
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

