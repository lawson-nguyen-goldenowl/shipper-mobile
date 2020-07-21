import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    View, Text, TouchableOpacity
} from 'react-native'
import main from "styles/main";
import styleForm from "styles/form";

const DASHBOARD = ({ navigation }) => {
    return (
        <View style={main.wrapper}>
            <Text style={main.title}>SHIPPER</Text>
            <View style={main.body}>
                <TouchableOpacity
                    style={styleForm.btn}
                    onPress={() => navigation.navigate('ORDERS')}
                >
                    <Text style={styleForm.btnText}>Your Orders</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default connect()(DASHBOARD)
