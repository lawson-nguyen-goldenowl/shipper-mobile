import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from "screens/dashboard";
import Orders from "screens/orders";


const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator headerMode="float">
        <Stack.Screen name="DASHBOARD" component={Dashboard} />
        <Stack.Screen name="ORDERS" component={Orders} />
    </Stack.Navigator>
)
