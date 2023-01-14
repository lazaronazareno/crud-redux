import clientAxios from '../../config/axios'
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
  EDIT_PRODUCT,
  SUCCESS_EDIT,
  ERROR_EDIT
} from '../types'
import Swal from 'sweetalert2'

export const addProductAction = (product) => {
  return async (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: true
    })

    try {
      await clientAxios.post('/products', product)

      dispatch({
        type: SUCCESS_PRODUCT,
        payload: product
      })

      Swal.fire(
        'Correcto',
        'El producto se agregó correctamente',
        'success'
      )
    } catch (error) {
      dispatch({
        type: ERROR_PRODUCT,
        payload: true
      })

      Swal.fire({
        icon: error,
        title: 'Hubo un error',
        text: 'Fallo en el servidor, intenta nuevamente'
      })
    }
  }
}

export const getProducts = () => {
  return async (dispatch) => {
    dispatch({
      type: GET_PRODUCTS,
      payload: true
    })

    try {
      const response = await clientAxios.get('/products')

      dispatch({
        type: SUCCESS_PRODUCTS,
        payload: response.data
      })
    } catch (error) {
      dispatch({
        type: ERROR_PRODUCTS,
        payload: true
      })
    }
  }
}

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: id
    })

    try {
      await clientAxios.delete(`/products/${id}`)

      dispatch({
        type: SUCCESS_DELETE
      })

      Swal.fire(
        'Eliminado!',
        'El producto se eliminó correctamente',
        'success'
      )
    } catch (error) {
      dispatch({
        type: ERROR_DELETE,
        payload: true
      })
    }
  }
}

export const getCurrentProduct = (product) => {
  return async (dispatch) => {
    dispatch({
      type: CURRENT_PRODUCT,
      payload: product
    })
  }
}

export const editProduct = (product) => {
  return async (dispatch) => {
    dispatch({
      type: EDIT_PRODUCT,
      payload: product
    })

    try {
      await clientAxios.put(`/products/${product.id}`, product)

      dispatch({
        type: SUCCESS_EDIT,
        payload: product
      })

      Swal.fire(
        'Confimado!',
        'El producto se editó correctamente',
        'success'
      )
    } catch (error) {
      dispatch({
        type: ERROR_EDIT,
        payload: true
      })
    }
  }
}
