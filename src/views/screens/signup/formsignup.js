import React, { useState } from 'react';
import { connect } from 'react-redux'
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import formStyle from "../../styles/form";
import Loading from "../loading";

const showErrors = (_errors) => {
    var result = []
    if (_errors) {
        Object.keys(_errors).map((k) => {
            _errors[k].forEach(error => {
                result.push(<Text style={[formStyle.error, {textAlign: 'center'}]} key={k}>{error}</Text>)
            });
        })
    }
    return result
}



const FormSignUp = ({ authentication, signup }) => {
    const isLoading = authentication.isLoading
    const errors = (authentication.errors && 'signup' in authentication.errors) ? authentication.errors.signup : false
    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [c_password, setC_Password] = useState('')
    return (
        <View style={formStyle.container}>
            {isLoading ? Loading() : null}
            {showErrors(errors)}
            <TextInput
                style={formStyle.input}
                placeholder="Enter your email"
                onChangeText={(email) => setEmail(email)}
                keyboardType="email-address"
                textContentType='emailAddress'
                defaultValue={email ?? ''}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your name"
                onChangeText={(name) => setName(name)}
                defaultValue={name}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your password"
                onChangeText={(password) => setPassword(password)}
                secureTextEntry={true}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your password again"
                onChangeText={(c_password) => setC_Password(c_password)}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={formStyle.btn}
                onPress={() => signup({ email, name, password, c_password })}
            >
                <Text style={{ color: 'white' }}>Sign up</Text>
            </TouchableOpacity>

        </View>
    );
}


const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        signup: authAct.signup,
    },
    dispatch,
)

const mapStateToProps = ({ authentication }) => ({ authentication })

export default connect(mapStateToProps, mapDispatchToProps)(FormSignUp)