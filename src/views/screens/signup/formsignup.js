import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'


const FormSignUp = ({ route, authentication, signup }) => {
    
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_Password] = useState('')

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.formInput}
                placeholder="Nhập email"
                onChangeText={(email) => setEmail(email)}
                keyboardType="email-address"
                textContentType='emailAddress'
                defaultValue={email ?? ''}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Nhập tên"
                onChangeText={(name) => setName(name)}
                defaultValue={name}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Nhập mật khẩu"
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Nhập lại mật khẩu"
                onChangeText={(c_password) => setC_Password(c_password)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.formBtn}
                onPress={() => signup({ email, name, password, c_password })}
            >
                <Text style={{ color: 'white' }}>Đăng ký</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    formInput: {
        backgroundColor: '#38B2CE',
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 15,
        color: 'white',
        alignSelf: 'stretch'
    },
    formBtn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        backgroundColor: '#FFA240',
        padding: 12,
        borderRadius: 25
    },
})

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        signup: authAct.signup,
    },
    dispatch,
)

const mapStateToProps = ({ authentication }) => ({ authentication })

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)