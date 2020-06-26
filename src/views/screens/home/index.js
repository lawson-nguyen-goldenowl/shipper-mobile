import React from 'react'
import { connect } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

const Home = ({authentication,navigation}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title} >APP SHIPPER</Text>
        <View>
            <Text>Hello {authentication.userInfo.name ?? ''}</Text>
        </View>
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
  }
})
const mapStateToProps = ({authentication}) => ({authentication})
export default connect(mapStateToProps)(Home)
