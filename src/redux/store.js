import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import { ProductsReducer } from './reducers/ProductsReducer'
import { AlertReducer } from './reducers/AlertReducer'

const store = configureStore({
  reducer: {
    products: ProductsReducer,
    alert: AlertReducer
  },
  middleware: [thunk]
}
)

export default store
