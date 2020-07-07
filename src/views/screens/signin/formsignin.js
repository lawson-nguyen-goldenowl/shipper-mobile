import React, { useState } from 'react';
import { connect } from "react-redux";
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from "redux";
import { authentication as authAct } from "redux/actions";
import formStyle from "../../styles/form";
import { CommonActions } from "@react-navigation/native";

const renderNotify = (isLoading, errors) => {
    let mess = ''
    if (errors) mess = 'Login Failed: ' + errors
    if (isLoading) mess = "Wait a second..."
    return (
        <View style={{ marginVertical: 5 }}>
            <Text style={formStyle.notify}>{mess}</Text>
        </View>
    )
}


const FormSignIn = ({ navigation, login, authentication }) => {
    if (authentication.token) {
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [
                    { name: 'Splash' }
                ]
            })
        )
        return null
    }
    const errors = (authentication.errors && 'signin' in authentication.errors ) ? authentication.errors.signin : false
    const isLoading = authentication.isLoading
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    console.log(authentication);

    return (
        <View style={formStyle.container}>
            {renderNotify(isLoading, errors)}
            <TextInput
                style={formStyle.input}
                placeholder="Enter your email"
                onChangeText={email => setEmail(email)}
                defaultValue={email ?? ''}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your password"
                onChangeText={password => setPassword(password)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={formStyle.btn}
                onPress={() => login(email, password)}
            >
                <Text style={formStyle.btnText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = ({ authentication }) => ({ authentication })

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        login: authAct.login,
    },
    dispatch,
)

export default connect(mapStateToProps, mapDispatchToProps)(FormSignIn)