import React, { useState } from 'react'
import { connect } from 'react-redux'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import FormSignUp from "./formsignup";
import { CommonActions } from "@react-navigation/native";



const showErrors = (_errors) => {
  var result = []
  if (_errors) {
    result.push(<Text style={styles.error} key="er_un"></Text>)
    Object.keys(_errors).map((k) => {
      _errors[k].forEach(error => {
        result.push(<Text style={styles.error} key={k}>{error}</Text>)
      });
    })
  } else {
    result.push(<Text style={styles.error} key="err_un" >Xãy ra lỗi...</Text>)
  }
  return result
}

const SignUp = ({ navigation, authentication }) => {
  console.log('sign up', authentication)
  return (
    <View style={styles.container}>
      <Text style={styles.title}> Đăng ký tài khoản </Text>
      <View>
        {authentication.errors ? showErrors(authentication.errors.detailErrors) : null}
      </View>
      <FormSignUp />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.link}>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  )
}

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
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  error: {
    color: 'brown',
    marginVertical: 2
  },
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    login: authAct.login,
    logout: authAct.logout,
  },
  dispatch,
)
const mapStateToProps = ({ authentication }) => ({ authentication })

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)