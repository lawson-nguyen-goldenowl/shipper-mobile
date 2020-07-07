import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native'
import apiOrders from 'redux/api/apiOrders';
import orderStyle from "../../../../../styles/orders";
import main from "../../../../../styles/main";
import { orders as orderActions } from "redux/actions";
import { bindActionCreators } from 'redux'



const AllOrders = ({ authentication, orders, updateOrders, setVisibilityDetail }) => {
    const allOrders = orders.data

    function Item(infoItem) {
        return (
            <TouchableOpacity
                onPress={() => setVisibilityDetail(infoItem.id)
                }
                style={orderStyle.item}>
                <Text style={orderStyle.itemTitle}>{infoItem.name}</Text>
                <View style={orderStyle.itemDescription}>
                    <Text style={orderStyle.itemInfo}>Order weight: {infoItem.weight}g</Text>
                    <Text style={orderStyle.itemInfo}>Recipient Name: {infoItem.recipientName}</Text>
                    <Text style={orderStyle.itemInfo}>Recipient Phone: {infoItem.recipientPhone} </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const showAllOrders = (allOrders) => {
        if (allOrders && allOrders.length == 0) {
            return (
                <View>
                    <Text>Loading Orders...</Text>
                </View>
            )
        }
        return (
            <FlatList
                style={main.body}
                data={allOrders}
                renderItem={({ item }) => Item(item)}
                keyExtractor={item => item.id.toString()}
            />
        )
    }
    
    useEffect(
        () => {
            apiOrders.showAll(authentication.token).then((response) => updateOrders(response))
        }
        , [])
    return (
        <View style={main.wrapper}>
            {showAllOrders(allOrders)}
        </View>
    )
}


const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        updateOrders: orderActions.updateOrders,
        setVisibilityDetail: orderActions.setVisibilityDetail
    },
    dispatch,
)
const mapStateToProps = ({ authentication, orders }) => ({ authentication, orders })
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)

