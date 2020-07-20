import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from "../views/screens/home/shipper";
import Orders from "src/views/screens/orders";


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator headerMode="float">
        <Stack.Screen name="DASHBOARD" component={Dashboard} />
        <Stack.Screen name="ORDERS" component={Orders} />
    </Stack.Navigator>
)
