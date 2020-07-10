import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux'
import { authentication as authAct } from 'redux/actions'
import formStyle from "../../styles/form";
import Loading from "../loading";
import apiPlaces from 'redux/api/apiPlaces';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';


const showErrors = (_errors) => {
    var result = []
    if (_errors) {
        Object.keys(_errors).map((k) => {
            _errors[k].forEach(error => {
                result.push(<Text style={[formStyle.error, { textAlign: 'center' }]} key={k}>{error}</Text>)
            });
        })
    }
    return result
}


const FormSignUp = ({ authentication, signup, navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        c_password: '',
        number_plate: '',
        places: []
    })
    const [allPlaces, setAllPlaces] = useState([])
    const isLoading = authentication.isLoading
    const errors = (authentication.errors && 'signup' in authentication.errors) ? authentication.errors.signup : false

    useEffect(() => {
        apiPlaces.getAllPlaces().then(allPlaces => {
            setAllPlaces(allPlaces)
        })
    }, [])

    return (
        <View style={formStyle.container}>
            {isLoading ? Loading() : null}
            {showErrors(errors.data)}
            <TextInput
                style={formStyle.input}
                placeholder="Enter your email"
                onChangeText={(email) => setData(preData => ({ ...preData, email }))}
                keyboardType="email-address"
                textContentType='emailAddress'
                defaultValue={data.email ?? ''}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your name"
                onChangeText={(name) => setData(preData => ({ ...preData, name }))}
                defaultValue={data.name}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your password"
                onChangeText={(password) => setData(preData => ({ ...preData, password }))}
                secureTextEntry={true}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your password again"
                onChangeText={(c_password) => setData(preData => ({ ...preData, c_password }))}
                secureTextEntry={true}
            />
            <TextInput
                style={formStyle.input}
                placeholder="Enter your number plate"
                onChangeText={(number_plate) => setData(preData => ({ ...preData, number_plate }))}
                defaultValue={data.numberPlate}
            />

            <View
                style={{
                    textAlign: 'center',
                    marginVertical: 10,
                    alignSelf: 'stretch'
                }}
            >
                <SectionedMultiSelect
                    styles={{
                        selectToggle: {
                            ...formStyle.input,
                            paddingVertical: 10
                        },
                        selectToggleText: {
                            color: 'grey',
                            textAlign: 'center'
                        }

                    }}
                    selectText='Places to works...'
                    searchPlaceholderText="Choose where you want to works..."
                    items={allPlaces}
                    uniqueKey="id"
                    confirmText="OK"
                    loading={allPlaces ? false : true}
                    onSelectedItemsChange={(selectedPlace) => {
                        setData(preData => ({
                            ...preData,
                            places: selectedPlace
                        }))
                    }}
                    selectedItems={data.places}
                />
            </View>

            <TouchableOpacity
                style={formStyle.btn}
                onPress={() => signup(data)}
            >
                <Text style={{ color: 'white' }}>Sign up</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={formStyle.link}>Login</Text>
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