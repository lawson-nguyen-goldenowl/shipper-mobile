import React from 'react'
import { connect } from "react-redux";
import {
  View,
  StyleSheet,
  Text,
} from 'react-native'
import { FormAddOrder } from "./orders";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home admin</Text>
      <FormAddOrder />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
})

export default connect()(Home)
