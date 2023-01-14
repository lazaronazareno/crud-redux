import React from 'react'
import { Link } from 'react-router-dom'
import image from '../assets/background.png'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-lg justify-content-between relative p-0'>
      <img
        src={image}
        alt='background figure, midjourney art'
        className='header__img'
      />
      <div className='header-div'>
        <h1 className='header__title text-dark'><Link to='/' className='text-dark text-decoration-none'>CRUD REDUX</Link></h1>

        <Link to='/products/new' className='header__button btn btn-success'>&#43; Agregar Producto</Link>
      </div>
    </nav>
  )
}

export default Header
