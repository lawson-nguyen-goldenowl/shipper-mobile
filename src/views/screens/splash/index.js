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

const Splash = ({ authentication, navigation, tokenCheck }) => {
  console.log(authentication);
  if (authentication.errors) {
    navigation.navigate(`${authentication.errors.Screen}`)
    return null
  }
  if (authentication.token !== null) {
    // Call API to get info user to check expired time token
    if  (authentication.userInfo) {
      navigation.navigate('Splash')
      return <NavBot />
    }
    let token = authentication.token
    tokenCheck(token)
    return null
    // If token wrong --> redirect login screen
    // If token right --> redirect home screen

  } else {
    navigation.navigate('SignIn')
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
const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    tokenCheck: authAct.tokenCheck,
  },
  dispatch,
)
export default connect(mapStateToProps, mapDispatchToProps)(Splash)