import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text } from 'react-native'
import FormSignUp from "./formsignup";
import main from '../../styles/main';

const SignUp = ({ navigation }) => {
  return (
    <View style={main.wrapper}>
      <Text style={main.title}> Sign Up </Text>
      <View>
      </View>
      <FormSignUp />
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={main.link}>Login</Text>
      </TouchableOpacity>
    </View>
  )
}

export default connect()(SignUp)