import clientAxios from '../../config/axios'
import {
  ADD_PRODUCT,
  SUCCESS_PRODUCT,
  ERROR_PRODUCT
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
      console.log(error)

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
