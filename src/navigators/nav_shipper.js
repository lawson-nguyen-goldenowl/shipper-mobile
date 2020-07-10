import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Dashboard from "../views/screens/home/shipper/dashboard";

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator headerMode="float">
        <Stack.Screen name="DASHBOARD" component={Dashboard} />
    </Stack.Navigator>
)
