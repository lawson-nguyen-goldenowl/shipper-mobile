import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import { connect } from "react-redux";




const Setting = ({ authentication, logout }) => {
    
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.btn} onPress={() => logout()}>
                <Text style={styles.title}>Đăng xuất</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 5,
        flex: 1,
        flexDirection: 'column-reverse',
        backgroundColor: '#38B2CE'
    },
    btn: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: 'grey',
    },
    title: {
        color: 'white',
    }
})
const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        logout: authAct.logout,
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(Setting)
