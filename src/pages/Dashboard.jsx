import React, { useEffect } from 'react'
import { useState } from 'react'

function Dashboard() {
  const [order, setorder] = useState([])
  const handleorder = async (e) => {
    try {
      const response = await fetch('http://localhost:8000/api/orders/all', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
      )
      const res = await response.json()
      if (res !== null) {
        setorder(res)
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handledispatch = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/orders/delete/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
      }
      )
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    handleorder()
  }, [])
  return (
    <>
      <div className='flex justify-center items-center flex-col'>
      <h1 className='text-5xl font-mono font-semibold m-3 mt-10'>Orders</h1>
        <table className='border-4 border-black text-xl text-center mt-10 '>
          <tr className='border-4 border-black text-2xl font-semibold '>
            <td className='border-4 border-black  '>Customer</td>
            <td className='border-4 border-black  '>Address</td>
            <td className=' flex flex-col justify-center items-center'>
            Order 
            <tr className='border-2 border-black text-2xl font-semibold '>
              <td>Item Name/Id</td>
              <td>Price</td>
              <td>Quantity</td>
            </tr></td>
            <td className='border-4 border-black' >
            Dispatched
          </td>
          </tr>
          {
            order.map((item) => {
              return (
                <tr className='border-4 border-black text-xl '>
                  <td className='border-4 border-black text-xl '>{item.Name}</td>
                  <td className='border-4 border-black text-xl '>{item.Email},{item.Address},{item.PostalCode}</td>
                  <td className='border-4 border-black text-xl '>{item.OrderItem.map((item) => {
                    return (
                      <tr >
                        <td className='m-1 '>{item.name},{item._id}</td>
                        <td className='pl-2' > ₨{item.Price},</td>
                        <td className='m-1'>{item.quantity}</td>
                      </tr>
                    )
                  })}</td>
                  <td><button className=' m-2 bg-blue-300 p-1  rounded-md' onClick={()=>{handledispatch(item._id)}}>Dispatched</button></td>
                </tr>
              )
            })
          }
        </table>
      </div>
    </>
  )
}
export default Dashboard
