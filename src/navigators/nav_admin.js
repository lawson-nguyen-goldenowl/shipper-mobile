import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { FormAddOrder, ShowOrders } from "../views/screens/home/admin/orders";
import Dashboard from "../views/screens/home/admin/dashboard";

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator
    headerMode="float"
  >
    <Stack.Screen
     options={{
       headerStyle: ''
     }}
     name="DASHBOARD" component={Dashboard} />
    <Stack.Screen
      options={{
        title: ''
      }}
      name="ADD_ORDER" component={FormAddOrder} />
    <Stack.Screen
      options={{
        title: 'ORDERS'
      }}
      name="SHOW_ORDERS"
      component={ShowOrders}
    />
  </Stack.Navigator>
)
