import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity
} from 'react-native'
import form from "../../../../styles/form";
import { bindActionCreators } from 'redux'
import { orders } from 'redux/actions'

const showMessage = message => {
    let result = []
    if (message) {
        if (message.detail && !message.result) {
            let _errors = message.detail
            Object.keys(_errors).map((k) => {
                _errors[k].forEach(error => {
                    result.push(<Text style={form.error} key={k}>{error}</Text>)
                });
            })
        }
    }
    return result
}

const initialState = {
    nameOrder: '',
    weight: null,
    recipientName: '',
    recipientPhone: '',
}

const Loading = (
    <View>
        <Text>Loading...</Text>
    </View>
)

const FormAddOrder = ({ authentication, addOrder, orders }) => {
    // console.log(orders);

    const [{
        nameOrder,
        weightOrder,
        recipientName,
        recipientPhone,
    }, setState] = useState(initialState)

    if (orders.isLoading) {
        return <Loading />
    }    
    

    return (
        <View style={form.container}>
            <Text style={form.title}>ADD NEW ORDER</Text>
            {orders.message ? showMessage(orders.message) : null}
            <TextInput
                style={form.input}
                placeholder="Enter order's name"
                onChangeText={(nameOrder) => setState(prevState => console.log(prevState)
                )}
                // defaultValue={nameOrder ?? ''}
            />
            <TextInput
                style={form.input}
                placeholder="Enter order's weight"
                keyboardType='numeric'
                onChangeText={(weightOrder) => setweightOrder(weightOrder)}
                defaultValue={weightOrder ?? ''}
            />
            <TextInput
                style={form.input}
                placeholder="Enter recipient's name"
                onChangeText={(recipientName) => setRecipientName(recipientName)}
                defaultValue={recipientName ?? ''}
            />
            <TextInput
                style={form.input}
                placeholder="Enter recipient's phone"
                keyboardType='numeric'
                onChangeText={(recipientPhone) => setrRcipientPhone(recipientPhone)}
                defaultValue={recipientPhone ?? ''}
            />
            <TouchableOpacity
                style={form.btn}
                onPress={() => addOrder({ data: { name: nameOrder, weight: weightOrder, recipientName, recipientPhone }, token: authentication.token })}
            >
                <Text>Submit</Text>
            </TouchableOpacity>
        </View>
    )
}



const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        addOrder: orders.addOrder,
    },
    dispatch,
)
const mapStateToProps = ({ authentication, orders }) => ({ authentication, orders })
export default connect(mapStateToProps, mapDispatchToProps)(FormAddOrder)
