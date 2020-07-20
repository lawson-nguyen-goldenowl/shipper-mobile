import React, { useEffect } from 'react'
import { connect } from "react-redux";
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { bindActionCreators } from "redux";
import { orders as orderActions } from "redux/actions";
import apiOrders from "apis/apiOrders"
import Loading from "screens/loading";
import mainStyle from 'styles/main'
import orderStyle from 'styles/orders'
import Maps from "./maps";

function Item(item, index, setVisibility, updateOrders) {
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

const AllOrders = ({ authentication, orders, setVisibility, updateOrders }) => {
    let token = authentication.token
    let allOrders = (orders.data).length ? orders.data : null

    useEffect(() => {
        apiOrders.getAll(token).then((res) => {
            updateOrders(res)
        })
    }, [])

    if (!allOrders) {
        return Loading('Loading your orders from sever ! Please wait a second...')
    }

    if (!allOrders.length) {
        return Loading('You dont have any orders now')
    }
    return (
        <View style={mainStyle.body}>
            {/* <Text>asdasdsad</Text> */}
            {/* <FlatList
                style={mainStyle.body}
                data={allOrders}
                renderItem={({ item, index }) => Item(item, index, setVisibility)}
                keyExtractor={item => item.id.toString()}
            /> */}
            <Maps />
        </View>
    )
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setVisibility: orderActions.setVisibility,
        updateOrders: orderActions.updateOrders
    },
    dispatch,
)
const mapStateToProps = ({ authentication, orders }) => ({ authentication, orders })
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)