import { connect } from "react-redux";
import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import NavBot from "navigators/nav_bottom";

const Splash = ({ authentication, navigation }) => {
  console.log(authentication);
  
  if (!authentication.isAuthenticated) {
    if (authentication.errors) {
      navigation.navigate(`${authentication.errors.Screen}`)
    }
    else navigation.navigate('SignIn')
    return (
      <View style={styles.container} >
        <View>
          <Text style={styles.title}>Bạn chưa đăng nhập : </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignIn')}
            style={styles.btn}
          >
            <Text style={{textAlign: 'center', color: 'white'}}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  } else {
    navigation.canGoBack() ? navigation.goBack() : ''
    return (
      <NavBot />
    )
  }

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
export default connect(mapStateToProps)(Splash)