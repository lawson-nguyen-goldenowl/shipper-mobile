import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    View, Text, TouchableOpacity
} from 'react-native'
import main from "../../../styles/main";

const DASHBOARD = ({ navigation }) => {
    return (
        <View style={main.wrapper}>
            <View style={main.header}>
                <Text style={main.title}>SHIPPER</Text>
            </View>

            <View style={main.body}>

            </View>
        </View>
    )
}

export default connect()(DASHBOARD)
