import {
  ADD_PRODUCT,
  SUCCESS_PRODUCT,
  ERROR_PRODUCT
} from '../types'

const initialState = {
  products: [],
  error: false,
  loading: false
}

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
        error: false
      }
    case SUCCESS_PRODUCT:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload]
      }
    case ERROR_PRODUCT:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state
  }
}
