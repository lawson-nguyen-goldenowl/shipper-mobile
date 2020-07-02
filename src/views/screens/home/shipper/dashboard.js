import { connect } from "react-redux";
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import NavBot from "navigators/nav_bottom";
import { CommonActions } from "@react-navigation/native";

const Shipper = () => {
  return (
      <View>
          <Text>Dash Board Shipper</Text>
      </View>
  )
}

export default Shipper