import React from "react";
import { 
    StyleSheet
 } from "react-native";

const orderStyle = StyleSheet.create({
    item: {
        backgroundColor: '#1a535c',
        marginVertical: 2
    },
    itemTitle: {
        color: '#ffe66d',
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 3,
        textAlign: 'center'
    },
    itemLable: {
        color: 'yellow',
        fontWeight: 'bold'
    },
    itemDescription: {
        marginVertical: 15,
    },
    itemInfo: {
        marginVertical: 5,
    },
    btn: {
        padding: 15,
        marginVertical: 2,
        backgroundColor: '#1a535c',
        justifyContent: 'center'
    },
    btnTitle: {
        textAlign: 'center',
        color: '#f7fff7',
        fontWeight: 'bold'
    },
    btnBg: {
        backgroundColor: '#ff6b6b',
        padding: 15,
        marginVertical: 2,
    },
    bgDetaiil: {
        backgroundColor: '#1a535c',
        flex: 1,
    }
})
export default orderStyle