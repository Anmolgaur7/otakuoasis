import React, { useEffect, useState } from 'react'

function Analytics() {
    const [order, setorder] = useState([])
    const [orders, setorders] = useState(0)
    const [products, setproducts] = useState([])
    const [nump, setnump] = useState(0)


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
    console.log(order);
    const calc = () => {
        console.log(order.length);
        console.log(products.length);
        setorders(order.length)
    }

    const handleproducts = async (e) => {
        try {
            const response = await fetch('http://localhost:8000/api/products/all/count', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            )
            const res = await response.json()
            if (res !== null) {
                setproducts(res)
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
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
                    <h1 className='m-2 text-xl font-semibold'>Products:</h1>
                    <h1 className='m-2 text-xl font-semibold'>Customers:</h1>
                </div>
            </div>

        </div>
    )
}

export default Analytics
