import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    View, Text, TouchableOpacity
} from 'react-native'
import main from "../../../styles/main";
import orderStyle from "../../../styles/orders";

const routeNames = { 
    dashbord: 'DASHBOARD',
    addOrder:  'ADD_ORDER',
    showOrders: 'SHOW_ORDERS'
}
const DASHBOARD = ({ navigation }) => {
    return (
        <View style={main.wrapper}>
            <View style={main.header}>
                <Text style={main.title}>Dashboard</Text>
            </View>

            <View style={main.body}>
                <TouchableOpacity
                 style={orderStyle.btn}
                 onPress={ () => navigation.navigate(routeNames.showOrders)}
                >
                    <Text style={orderStyle.btnTitle}>ORDERS</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                 style={orderStyle.btn}
                 onPress={ () => navigation.navigate(routeNames.addOrder)}
                >
                    <Text style={orderStyle.btnTitle}>ADD NEW ORDER</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect()(DASHBOARD)
