import React, {useState} from 'react';
import { connect } from 'react-redux'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'


const FormSignIn = ({login}) => {
    const [email , setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.formInput}
                placeholder="Nhập email"
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Nhập mật khẩu"
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.formBtn}
                onPress={() => login({email,password})}
            >
                <Text  style={{ color: 'white' }}>Đăng nhập</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        padding: 10,
    },
    formInput: {
        backgroundColor: '#38B2CE',
        marginVertical: 10,
        borderRadius: 25,
        textAlign: 'center',
        fontSize: 15,
        color: 'white'
    },
    formBtn: {
        alignItems: 'center',
        alignSelf: 'center',
        width: '50%',
        backgroundColor: '#FFA240',
        padding: 12,
        borderRadius: 25
    },

})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        login: authAct.login,
        logout: authAct.logout,
    },
    dispatch,
)

export default connect(null, mapDispatchToProps)(FormSignIn)