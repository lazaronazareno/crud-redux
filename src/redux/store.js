import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import Reducer from './reducers'

const store = configureStore({
  reducer: {
    products: Reducer
  },
  middleware: [thunk]
}
)

export default store
