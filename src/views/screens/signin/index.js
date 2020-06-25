import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import FormSignIn from "./formsignin";

const SignIn = ({authentication, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Đăng nhập </Text>
      <FormSignIn />
      <Text onPress={() => {navigation.navigate('SignUp')}} style={styles.link}>Đăng ký tài khoản</Text>
    </View>
  )
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    login: authAct.login,
    logout: authAct.logout,
  },
  dispatch,
)

const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps, mapDispatchToProps)(SignIn)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#60B9CE",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  link: {
    marginVertical: 10,
    color: 'blue',
    textDecorationLine: 'underline'
  }
})