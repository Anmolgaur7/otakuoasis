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


const ROUTES=[
  {
   path:'/',
   key:'ROOT',
   element:<Home/>
  },
  {
    path:'/login',
    key:'LOGIN',
    element:<Login/>
   }, 
    {
    path:'/products',
    key:'PRODUCTS',
    element:<Products/>
   }, 
    {
    path:'/products/:id',
    key:'PRODUCTS/ID',
    element:<Productdetails/>
   },
   {
    path:'/checkout',
    key:'CHECKOUT',
    element:<Checkout/>
   },
   {
    path:'/cart',
    key:'CART',
    element:<Cart/>
   },
   {
    path:'/:id',
    key:'ROOT/ID',
    element:<Productdetails/>
   },
]

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      {
        ROUTES.map(({path,key,element})=>{
        return(
          <Route path={path} key={key} element={
            <>
             <Navbar/>
            {element}
            </>
          }/>
        )
        })
      }
      <Route path='*' element={<Notfound/>}/>
      <Route path='/admin' element={<>
      <Navigate to={'dashboard'}/>
      <Outlet/>
      </>}>
      <Route index path='dashboard' element={<Dashboard/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
