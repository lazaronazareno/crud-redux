import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addProductAction } from '../redux/actions/productActions'

const NewProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  const [values, setValues] = useState({
    name: '',
    price: ''
  })

  const { name, price } = values

  const onChange = (e) => {
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

    dispatch(addProductAction(values))

    navigate('/')
  }
  return (
    <div className='row justify-content-center'>
      <h1>Nuevo Producto</h1>
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
        <button type='submit' className='btn btn-success'>Agregar</button>
      </form>
      {loading ? <p>Cargando</p> : null}
      {error ? <p className='alert alert-danger p-2 mt-2 text-center'>Hubo un error</p> : null}
    </div>
  )
}

export default NewProduct
