import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Productlist from './components/productlist'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'

function App() {
  return (
    <>
    <Navbar/>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/products/:id' element={<Productdetails/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/:id' element={<Productdetails/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
