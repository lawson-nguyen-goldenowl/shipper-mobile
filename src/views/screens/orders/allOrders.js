import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import {
    FlatList,
    Text,
    View,
    TouchableOpacity
} from 'react-native'
import { bindActionCreators } from "redux";
import { orders as orderActions } from "redux/actions";
import apiOrders from "apis/apiOrders"
import Loading from "screens/loading";
import formStyle from 'styles/form'
import orderStyle from 'styles/orders'
import Maps from "./maps";

function Item(item, index, setVisibility) {
    return (
        <TouchableOpacity
            onPress={() => setVisibility('SHOW_DETAIL', index)}
            style={orderStyle.item}>
            <Text style={orderStyle.itemTitle}>{item.name}</Text>
            <View style={orderStyle.itemDescription}>
                <Text style={orderStyle.itemInfo}>Order weight: {item.weight}g</Text>
                <Text style={orderStyle.itemInfo}>Recipient Name: {item.recipientName}</Text>
                <Text style={orderStyle.itemInfo}>Recipient Phone: {item.recipientPhone} </Text>
            </View>
        </TouchableOpacity>
    );
}

const DisplayMode = ({ mode }) => {
    switch (mode.mode) {
        case 'orders':
            return (
                <FlatList
                    data={mode.data}
                    renderItem={({ item, index }) => Item(item, index, mode.actions)}
                    keyExtractor={item => item.id.toString()}
                />
            )
            break;
        case 'routes':
            return <Maps data={mode.data} />
        default:
            return null;
            break;
    }
}



const AllOrders = ({ authentication, orders, setVisibility, updateOrders }) => {

    let token = authentication.token
    let [displayModes, setDisplayModes] = useState({ mode: 'orders', data: (orders.data).length ? orders.data : [], actions: setVisibility })

    const swapMode = () => {
        if (displayModes.mode == 'orders') {
            setDisplayModes((premode) => ({
                ...premode,
                mode: 'routes'
            }))
        } else {
            setDisplayModes((premode) => ({
                ...premode,
                mode: 'orders'
            }))
        }
    }
    useEffect(() => {
        apiOrders.getAll(token).then((res) => {
            updateOrders(res)
            setDisplayModes((premode) => ({
                ...premode,
                data: res
            }))
        })
    }, [])

    if (!displayModes.data.length) {
        return Loading('Loading your orders from sever ! Please wait a second...')
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, flexGrow: 1 }}>
                <DisplayMode mode={displayModes} />
                <TouchableOpacity
                    onPress={() => swapMode()}
                    style={formStyle.btn}>
                    <Text style={formStyle.btnText}>View {displayModes.mode == 'orders' ? 'routes' : 'orders'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



const mapDispatchToProps = (dispatch) => bindActionCreators(
    {
        setVisibility: orderActions.setVisibility,
        updateOrders: orderActions.updateOrders
    },
    dispatch,
)
const mapStateToProps = ({ authentication, orders }) => ({ authentication, orders })
export default connect(mapStateToProps, mapDispatchToProps)(AllOrders)