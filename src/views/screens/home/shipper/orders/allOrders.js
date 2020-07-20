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
import Loading from "../../../loading";


const AllOrders = ({ authentication, orders, updateOrders, setVisibility }) => {
    const allOrders = orders.data;

    function Item(item, index) {
        return (
            <TouchableOpacity
                onPress={() => setVisibility('SHOW_DETAIL', index)}
                style={orderStyle.item}>
                <Text style={orderStyle.itemTitle}>{item.name}</Text>
                <View style={orderStyle.itemDescription}>
                    <Text style={orderStyle.itemInfo}>Order weight: {item.weight}g</Text>
                    <Text style={orderStyle.itemInfo}>Recipient Name: {item.recipientName}</Text>
                    <Text style={orderStyle.itemInfo}>Recipient Phone: {item.recipientPhone} </Text>
                </View>
            </TouchableOpacity>
        );
    }

    const showAllOrders = (allOrders) => {
        if (allOrders && allOrders.length == 0) {
            return Loading('Loading your orders from sever ! Please wait a second...')
        }
        return (
            <FlatList
                style={main.body}
                data={allOrders}
                renderItem={({ item, index }) => Item(item, index)}
                keyExtractor={item => item.id.toString()}
            />
        )
    }

    useEffect(
        () => {
            apiOrders.showAll(authentication.token).then((response) => {
                updateOrders(response)
            })
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
        setVisibility: orderActions.setVisibility
    },
    dispatch,
)
const mapStateToProps = ({ orders, authentication }) => ({ orders, authentication })
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)

