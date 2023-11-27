import React, { useEffect } from 'react'
import { useState } from 'react'

function Userorders() {
  const [orders, setorders] = useState([])
  const id=JSON.parse(localStorage.getItem("user")).id
  const handleorders= async()=>{
    const response=await fetch("http://localhost:8000/api/orders/all",{
        method:"GET",
        headers:{
          "Content-Type":"application/json",
        }
      })
        const res=await response.json()
        console.log(res);
        setorders(res)
  }
  useEffect(() => {
    handleorders()
  }, [])
  return (
    <div>
      <h1 className='text-center font-semibold '>Your Orders</h1>
      {orders.map((order)=>{
        return(
          order.id===id&&
          <div className='border-2 border-gray-400 rounded-lg p-4 my-4 m-4'>
            <h1 className='font-semibold ml-1'>Order Id: {order._id}</h1>
            {order.OrderItem.map((item)=>{
              return(
                <div className='border-2 border-gray-400 rounded-lg p-4 my-4'>
                  <h1 className='font-semibold'>Product Name: {item.name}</h1>
                  <h1 className='font-semibold'>Product Price: {item.Price}</h1>
                  <h1 className='font-semibold'>Product Quantity: {item.quantity}</h1>
                </div>
              )
            })}
          </div>
        )     
      })}
    </div>
  )
}

export default Userorders
