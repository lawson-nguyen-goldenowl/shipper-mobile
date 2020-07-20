import React from 'react'
import {
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import main from 'styles/main'
import orderStyle from 'styles/orders'
import { orders as orderActions } from "redux/actions";
import styleForm from 'styles/form'
const Item = order => (
    <View style={main.body}>
        <Text style={orderStyle.itemTitle}>{order.name}</Text>
        <View style={orderStyle.itemDescription}>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Status: </Text>
                {order.status}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Order weight: </Text>
                {order.weight}g
                </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Description: </Text>
                {order.description}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Recipient Name: </Text>
                {order.recipientName}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Recipient Phone: </Text>
                {order.recipientPhone}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Recipient Addresss: </Text>
                {order.recipientAddress}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Shipper: </Text>
                {order.idShipper}
            </Text>
            <Text style={orderStyle.itemInfo}>
                <Text style={orderStyle.itemLable}>Created: </Text>
                {order.created_at}
            </Text>
        </View>
    </View>
)

const DetailOrder = ({ orders, setVisibility }) => {
    const order = orders.data[orders.index]
    console.log(order)
    return (
        <View style={main.wrapper}>
            {Item(order)}
            <TouchableOpacity
                style={styleForm.btn}
                onPress={() => setVisibility('SHOW_ALL')}
            >
                <Text style={styleForm.btnText}>View All Orders</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setVisibility: orderActions.setVisibility,
    },
    dispatch,
)
const mapStateToProps = ({ orders }) => ({ orders })

export default connect(mapStateToProps, mapDispatchToProps)(DetailOrder)
