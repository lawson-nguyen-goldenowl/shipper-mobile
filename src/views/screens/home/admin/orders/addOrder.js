import React, { useState } from 'react'
import { connect } from "react-redux";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import form from "../../../../styles/form";
import { bindActionCreators } from 'redux'
import { orders } from 'redux/actions'

const showMessage = message => {
    let result = []
    if (message) {
        let messStyle = {
            marginVertical: 2,
            fontWeight: 'bold',
            textAlign: 'center'
        }
        let titleStyle = {
            fontSize: 20
        }
        let detaileStyle = {
            fontSize: 15
        }
        // add order success
        messStyle.color = message.result ? 'aqua' : 'brown'
        result.push(<Text key="titleMess" style={[messStyle,titleStyle]}>{ message.result ? 'Thành công' : 'Xảy ra lỗi !' }</Text>)
        if (message.detail && !message.result) {
            let _errors = message.detail
            Object.keys(_errors).map((k) => {
                _errors[k].forEach(error => {
                    result.push(<Text style={[messStyle, detaileStyle]} key={k}>{error}</Text>)
                });
            })
        }
    }
    return result
}

const FormAddOrder = ({ authentication, addOrder, orders }) => {
    const [nameOrder, setNameOrder] = useState('')
    const [weightOrder, setweightOrder] = useState(null)
    const [recipientName, setRecipientName] = useState('')
    const [recipientPhone, setrRcipientPhone] = useState('')
    if (orders.isLoading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }
    return (
        <View>
            <View style={form.container}>
                <Text style={form.title}>Thêm hóa đơn</Text>
                {orders.message ? showMessage(orders.message) : null}
                <TextInput
                    style={form.input}
                    placeholder="Tên Hóa Đơn"
                    onChangeText={(nameOrder) => setNameOrder(nameOrder)}
                    defaultValue={nameOrder ?? ''}
                />
                <TextInput
                    style={form.input}
                    placeholder="Khối lượng Hóa Đơn"
                    keyboardType='numeric'
                    onChangeText={(weightOrder) => setweightOrder(weightOrder)}
                    defaultValue={weightOrder ?? ''}
                />
                <TextInput
                    style={form.input}
                    placeholder="Tên Người Nhận"
                    onChangeText={(recipientName) => setRecipientName(recipientName)}
                    defaultValue={recipientName ?? ''}
                />
                <TextInput
                    style={form.input}
                    placeholder="Số điện thoại người nhận"
                    keyboardType='numeric'
                    onChangeText={(recipientPhone) => setrRcipientPhone(recipientPhone)}
                    defaultValue={recipientPhone ?? ''}
                />
                <TouchableOpacity
                    style={form.btn}
                    onPress={() => addOrder({ data: { name: nameOrder, weight: weightOrder, recipientName, recipientPhone }, token: authentication.token })}
                >
                    <Text>Thêm</Text>
                </TouchableOpacity>
            </View>
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
