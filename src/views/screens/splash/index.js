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

const Splash = ({ authentication, navigation, tokenCheck, }) => {
  if (authentication.errors) {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [
          {
            name: `${authentication.errors.Screen}`,
            params: {
              errors: authentication.errors.detailErrors
            }
          }
        ]
      })
    )
    return null
  }
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
    <View>
      <Text>Đang chờ kết quả...</Text>
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
    backgroundColor: 'green',
    padding: 10,
    marginVertical: 15,
  }
})
const mapStateToProps = ({ authentication }) => ({ authentication })
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    tokenCheck: authAct.tokenCheck,
  },
  dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(Splash)
