import {
  ADD_PRODUCT,
  SUCCESS_PRODUCT,
  ERROR_PRODUCT,
  GET_PRODUCTS,
  SUCCESS_PRODUCTS,
  ERROR_PRODUCTS,
  DELETE_PRODUCT,
  ERROR_DELETE,
  SUCCESS_DELETE,
  CURRENT_PRODUCT,
  SUCCESS_EDIT,
  ERROR_EDIT
} from '../types'

const initialState = {
  products: [],
  error: false,
  loading: false,
  confirmDelete: null,
  currentProduct: null
}

export const ProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
    case GET_PRODUCTS:
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
    case ERROR_PRODUCTS:
    case ERROR_DELETE:
    case ERROR_EDIT:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    case SUCCESS_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: action.payload
      }
    case DELETE_PRODUCT:
      return {
        ...state,
        confirmDelete: action.payload
      }
    case SUCCESS_DELETE:
      return {
        ...state,
        products: state.products.filter(item => item.id !== state.confirmDelete),
        confirmDelete: null
      }
    case CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.payload
      }
    case SUCCESS_EDIT:
      return {
        ...state,
        currentProduct: null,
        products: state.products.map(item => (
          item.id === action.payload.id ? action.payload : item)
        )
      }
    default:
      return state
  }
}
