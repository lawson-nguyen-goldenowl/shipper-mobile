import React, { useState, useEffect } from 'react'
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import Admin from "./admin";

const Nav = (permission) => {
  switch (permission) {
    case 2:
      return (<Admin />)
    default:
      return (
        <View>
          <Text>Default</Text>
        </View>
      )
  }
}

const Home = ({ authentication, navigation }) => {
  return (
    <View style={styles.container}>
      {Nav(authentication.userInfo.permission)}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#60B9CE",
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  btn: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'grey',
  },
})
const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps)(Home)
