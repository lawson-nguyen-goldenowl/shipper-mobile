import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

import rootReducer from '../reducers'
import rootSaga from '../sagas'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: ['Common'],
  // blacklist: ['authentication'],

}

const sagaMiddleware = createSagaMiddleware()

const persisterReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persisterReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store

export { store }

export const persistor = persistStore(store)
