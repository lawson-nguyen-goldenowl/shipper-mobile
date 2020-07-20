import React from 'react'
import { View, Text } from 'react-native'
import main from "styles/main";

const Loading = (message) => {
  return (
    <View style={{ marginVertical: 5 }}>
      <Text style={{textAlign: 'center', ...main.notify}}>{message}</Text>
    </View>
  )
}
export default Loading