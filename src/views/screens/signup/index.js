import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import FormSignUp from "./formsignup";

const SignUp = () => {
  return (
    <View style={styles.container}>
      <FormSignUp />
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

export default connect(null, mapDispatchToProps)(SignUp)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#60B9CE",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginVertical: 10,
    color: 'blue',
    textDecorationLine: 'underline'
  }
})