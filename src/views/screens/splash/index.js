import { connect } from "react-redux";
import React from 'react'
import { View, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import NavBot from "navigators/nav_bottom";
import { CommonActions } from "@react-navigation/native";
import main from "../../styles/main";

const Splash = ({ authentication, navigation, tokenCheck, }) => {

  if (authentication.token !== null) {
    if (authentication.userInfo) {
      return <NavBot />
    }
    else {
      let token = authentication.token
      tokenCheck(token)
    }
  } else {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          { name: 'SignIn' }
        ]
      })
    )
  }
  
  return (
    <View style={main.wrapper}>
      <Text style={main.title}>Loading...</Text>
    </View>
  )
}


const mapStateToProps = ({ authentication }) => ({ authentication })
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    tokenCheck: authAct.tokenCheck,
  },
  dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(Splash)
