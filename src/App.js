import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import EditProduct from './components/EditProduct'
import Header from './components/Header'
import NewProduct from './components/NewProduct'
import Products from './components/Products'

import { Provider } from 'react-redux'
import store from './redux/store'

function App () {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path='/' element={<Products />} />
          <Route exact path='/products/new' element={<NewProduct />} />
          <Route exact path='/products/edit/:id' element={<EditProduct />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  )
}

export default App
