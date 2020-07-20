import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import apiOrders from 'redux/api/apiOrders';
import orderStyle from "../../../../styles/orders";
import main from "../../../../styles/main";
import { orders as orderActions } from "redux/actions";
import { bindActionCreators } from 'redux'


const DetailOrder = ({orders, setVisibility }) => {
    const infoItem = orders.data[orders.index];


    return (
        <View style={main.body}>
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
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setVisibility: orderActions.setVisibility
    },
    dispatch,
)
const mapStateToProps = ({ orders}) => ({ orders })
export default connect(mapStateToProps, mapDispatchToProps)(DetailOrder)

