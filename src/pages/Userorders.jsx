import React, { useEffect } from 'react'
import { useState } from 'react'

function Userorders() {
  const [orders, setorders] = useState([])
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
      
    </div>
  )
}

export default Userorders
