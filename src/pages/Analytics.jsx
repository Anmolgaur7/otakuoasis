import React, { useEffect, useState } from 'react'

function Analytics() {
    const [order, setorder] = useState([])
    const [orders, setorders] = useState(0)
    const [products, setproducts] = useState([])
    const [nump, setnump] = useState(0)
    const [customers, setcustomers] = useState([])
    const [numc, setnumc] = useState(0)


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
    const handlecustomers= async (e) => {
        try {
            const response = await fetch('http://localhost:8000/api/auth/all', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            const res = await response.json()
            if (res !== null) {
                setcustomers(res)
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleproducts = async (e) => {
        try {
            const response = await fetch('http://localhost:8000/api/products/all/count',{
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            const res = await response.json()
            if (res !== null) {
                setproducts(res)
                console.log(res);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(order);
    const calc = () => {
        console.log(order.length);
        console.log(products.length);
        console.log(customers.length);
        setorders(order.length)
        setnump(products.length)
        setcustomers(customers.length)
    }
    useEffect(() => {
        if(!localStorage.getItem("token")){
            window.location.href("/login")
          }
        handleorder();
        handleproducts();
        calc()
    }, [])
    return (
        <div className=' flex  justify-center flex-col items-center p-20'>
            <h1 className='text-center text-2xl'>Analytics</h1>
            <div className='flex justify-evenly'>
                <div className='flex flex-col justify-center items-center rounded-xl m-5 bg-green-300 w-[10rem] h-[10rem]'>
                    <h1 className='m-2 text-xl font-semibold '>Orders : {`${orders}`}</h1>
                </div>
                <div className='flex flex-col bg-red-300 justify-center rounded-xl m-5 items-center  w-[10rem] h-[10rem]'>
                    <h1 className='m-2 text-xl font-semibold'>Products:{`${nump}`}</h1>
                    <h1 className='m-2 text-xl font-semibold'>Customers:{`${numc}`}</h1>
                </div>
            </div>

        </div>
    )
}

export default Analytics
