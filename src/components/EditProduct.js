import React from 'react'

const EditProduct = () => {
  return (
    <div className='row justify-content-center'>
      <h1>Editar Producto</h1>
      <form className='d-flex flex-column gap-2'>
        <div className='form-floating text-dark'>
          <input
            type='text'
            className='form-control'
            placeholder=' '
            name='name'
          />
          <label htmlFor='name'>Nombre producto</label>
        </div>
        <div className='form-floating text-dark'>
          <input
            type='text'
            className='form-control'
            placeholder='Precio'
            name='price'
          />
          <label htmlFor='price'>Precio</label>
        </div>
        <button type='submit' className='btn btn-success'>Editar</button>
      </form>
    </div>
  )
}

export default EditProduct
