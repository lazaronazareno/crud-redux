import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { deleteProduct, getCurrentProduct } from '../redux/actions/productActions'
import Swal from 'sweetalert2'

const Product = ({ product }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { name, price, id } = product

  const onDelete = (id) => {
    Swal.fire({
      title: '¿Estas seguro?',
      text: 'Un producto eliminado no se puede recuperar',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.value) {
        dispatch(deleteProduct(id))
      }
    })
  }

  const handleEdit = (product) => {
    dispatch(getCurrentProduct(product))
    navigate(`/products/edit/${product.id}`)
  }

  return (
    <tr>
      <td>{name}</td>
      <th>{price}</th>
      <td>
        <button
          className='btn btn-warning'
          onClick={() => handleEdit(product)}
        >Editar
        </button>
        <button
          onClick={() => onDelete(id)}
          className='btn btn-danger'
        >Eliminar
        </button>
      </td>
    </tr>
  )
}

export default Product
