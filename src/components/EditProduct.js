import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editProduct } from '../redux/actions/productActions'

const EditProduct = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentProduct = useSelector(state => state.products.currentProduct)
  if (!currentProduct) return

  useEffect(() => {
    setValues(currentProduct)
  }, [currentProduct])

  const [values, setValues] = useState({
    name: '',
    price: ''
  })

  const { name, price } = values

  const onChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (name.trim() === '' || price.trim() <= 0) {
      return
    }

    dispatch(editProduct(values))

    navigate('/')
  }
  return (
    <div className='justify-content-center'>
      <h1>Editar Producto</h1>
      <form
        onSubmit={onSubmit}
        className='d-flex flex-column gap-2'
      >
        <div className='form-floating text-dark'>
          <input
            type='text'
            className='form-control'
            placeholder=' '
            name='name'
            value={name}
            onChange={onChange}
          />
          <label htmlFor='name'>Nombre producto</label>
        </div>
        <div className='form-floating text-dark'>
          <input
            type='text'
            className='form-control'
            placeholder='Precio'
            name='price'
            value={price}
            onChange={onChange}
          />
          <label htmlFor='price'>Precio</label>
        </div>
        <button type='submit' className='btn btn-success'>Editar</button>
      </form>
    </div>
  )
}

export default EditProduct
