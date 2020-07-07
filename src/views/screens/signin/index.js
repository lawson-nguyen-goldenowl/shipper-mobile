import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import FormSignIn from "./formsignin";
import mainStyle from "../../styles/main";


const SignIn = ({ navigation }) => {

  return (
    <View style={mainStyle.wrapper}>
      <Text style={mainStyle.title}> Login </Text>
      <FormSignIn navigation={navigation} />
      <Text onPress={() => {navigation.navigate('SignUp')}} style={mainStyle.link}>Sign up</Text>
    </View>
  )
}

export default connect()(SignIn)
