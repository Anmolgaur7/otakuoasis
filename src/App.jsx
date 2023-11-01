import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Productlist from './components/productlist'
import Home from './pages/Home'
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom'
import Notfound from './pages/Notfound'
import Products from './pages/Products'
import Productdetails from './pages/Productdetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Applayout from './pages/Applayout'
import Addproduct from './pages/Addproduct'
import Landing from './pages/Landing'


const ROUTES = [
 
  {
    path: '/home',
    key: 'ROOT',
    element: <Home />
  },
  {
    path: '/login',
    key: 'LOGIN',
    element: <Login />
  },
  {
    path: '/products',
    key: 'PRODUCTS',
    element: <Products />
  },
  {
    path: '/products/:id',
    key: 'PRODUCTS/ID',
    element: <Productdetails />
  },
  {
    path: '/checkout',
    key: 'CHECKOUT',
    element: <Checkout />
  },
  {
    path: '/cart',
    key: 'CART',
    element: <Cart />
  },
]
const APP_ROUTES = [
  {
    path: "/admin/dashboard",
    key: 'Dash',
    element: <Dashboard />
  },
  {
    path: "/admin/products",
    key: 'Product',
    element: <Products />
  },
  {
    path: "/admin/addproduct",
    key: 'Product',
    element: <Addproduct/>
  },
]
const Protectedroute=({element,isloggedin,...rest})=>{
  return isloggedin ? <Outlet/>:<Navigate to='/login'/>
}
function App() {
  const token = window.localStorage.getItem("token")||null;
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            ROUTES.map(({ path, key, element }) => {
              return (
                <Route path={path} key={key} element={
                  <>
                    <Navbar />
                    {element}
                  </>
                } />
              )
            })
          }
          <Route path='*' element={<Notfound />} />
          <Route path='/' element={<Landing/>} />
          <Route path='/admin' element={<>
            <Protectedroute isloggedin={token}/>
          </>}>
            {
              APP_ROUTES.map(({ path, key, element }) => {
                return (
                  <Route path={path} key={key} element={
                    <>
                      <Applayout>
                        {element}
                      </Applayout>
                    </>
                  } />
                )

              })
            }
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
