import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../redux/actions/productActions'
import Product from './Product'

const Products = () => {
  const dispatch = useDispatch()

  const products = useSelector(state => state.products.products)
  const loading = useSelector(state => state.products.loading)
  const error = useSelector(state => state.products.error)

  useEffect(() => {
    dispatch(getProducts())
  }, [])
  return (
    <div className='d-flex flex-column p-4'>
      {loading ? <p>Cargando</p> : null}
      {error ? <p className='alert alert-danger p-2 mt-2 text-center'>Hubo un error</p> : null}
      <table>
        <thead>
          <tr>
            <th className='text-warning fs-3'>Nombre</th>
            <th className='text-warning fs-3'>Precio</th>
            <th className='text-warning fs-3'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? <tr><th>No hay productos</th></tr>
            : (
                products.map(item => (
                  <Product key={item.id} product={item} />
                ))
              )}
        </tbody>
      </table>
    </div>
  )
}

export default Products
