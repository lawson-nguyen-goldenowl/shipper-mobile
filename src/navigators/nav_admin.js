import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Admin_Orders } from '../views/screens/home/admin'

const Stack = createStackNavigator()

export default () => (
    <Stack.Navigator
      initialRouteName="Splash"
      headerMode="none"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
)
