import React from 'react'
import { connect } from 'react-redux'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'
import FormSignUp from "./formsignup";
import main from '../../styles/main';

const SignUp = ({ navigation }) => {
  return (
    <View style={main.wrapper}>
      <ScrollView style={{ alignSelf: 'stretch' }}>
        <Text style={main.title}> Sign Up </Text>
        <View>
        </View>
        <FormSignUp navigation={navigation} />
        
      </ScrollView>
    </View>
  )
}

export default connect()(SignUp)