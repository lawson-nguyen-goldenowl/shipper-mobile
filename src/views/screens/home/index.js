import React from 'react'
import { connect } from "react-redux";
import {
  View,
  Text,
} from 'react-native'
import Admin from "./admin";

const Nav = (permission) => {
  switch (permission) {
    case 'admin':
      return (<Admin />)
    default:
      return (
        <View>
          <Text>Default</Text>
        </View>
      )
  }
}

const Home = ({ authentication }) => {
  return Nav(authentication.userInfo.permission)
}

const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps)(Home)
