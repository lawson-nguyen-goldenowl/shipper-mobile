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

const FormAddOrder = ({ authentication, addOrder }) => {
    const [nameOrder, setNameOrder] = useState('order test 1')
    const [weightOrder, setweightOrder] = useState(1.2)
    const [recipientName, setRecipientName] = useState('Test12')
    const [recipientPhone, setrRcipientPhone] = useState('1113')

    return (
        <View>
            <View style={form.container}>
                <Text style={form.title}>Thêm hóa đơn</Text>
                <TextInput
                    style={form.input}
                    placeholder="Tên Hóa Đơn"
                    onChangeText={ (nameOrder) => setNameOrder(nameOrder) }
                />
                <TextInput
                    style={form.input}
                    placeholder="Khối lượng Hóa Đơn"
                    onChangeText={ (weightOrder) => setweightOrder(weightOrder) }
                />
                <TextInput
                    style={form.input}
                    placeholder="Tên Người Nhận"
                    onChangeText={ (recipientName) => setRecipientName(recipientName) }
                />
                <TextInput
                    style={form.input}
                    placeholder="Số điện thoại người nhận"
                    onChangeText={ (recipientPhone) => setrRcipientPhone(recipientPhone) }
                />
                <TouchableOpacity
                    style={form.btn}
                    onPress={ () => addOrder({ data: {nameOrder, weightOrder, recipientName, recipientPhone }, token: authentication.token}) }
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
const mapStateToProps = ({ authentication }) => ({ authentication })
export default connect(mapStateToProps, mapDispatchToProps)(FormAddOrder)
