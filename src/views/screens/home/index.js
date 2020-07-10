import React from 'react'
import { connect } from "react-redux";
import {
  View,
  Text,
} from 'react-native'
import Admin from "./admin";
import Shipper from "./shipper"


const Nav = (permission) => {
  switch (permission) {
    case 'admin':
      return (<Admin />)
    case 'shipper':
      return <Shipper />
    default:
      return (
        <View>
          <Text>Guest</Text>
        </View>
      )
  }
}

const Home = ({ authentication }) => {
  return Nav(authentication.userInfo.permission)
}

const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps)(Home)
