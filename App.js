import React from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { store, persistor } from 'redux/store'
import Navigators from 'navigators'

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Navigators />
    </PersistGate>
  </Provider>
)

