import React, { useState } from 'react'
import Logo from "../images/oa.jpg";
import user from "../images/user.png";
import { Link } from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function Navbar() {
    const [visible, setvisible] = useState("hidden")
    const logout=()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('cart')
        localStorage.removeItem('total')
        localStorage.removeItem('token')
        toast.success('Logged Out Successfully')
        window.location.href='/login'
    }

    return (
        <>
        <ToastContainer/>
            <h1 className='h-2rem text-center bg-black p-2 text-white font-semibold'> <marquee className='w-[25rem]' direction="right">Free Shipping  on all orders above ₨499</marquee></h1>
            <nav className="flex  justify-around items-center  p-2 bg-red-100 mb-5">
                <ul className='flex items-center'>
                    <li className='m-2 text-lg font-semibold text-black '><a href="/home">
                        <img src={Logo} className='w-[8vw] rounded-4xl' />
                    </a></li>
                    <li className='m-2 text-lg font-semibold text-black '><a href="/products">Products</a></li>
                </ul>
                <div className='flex  justify-center items-center'>
                    <Link to={'/cart'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 hover:text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </Link>
                    <h1 className='font-bold ml-5 hover:text-white cursor-pointer mr-2' onClick={() => {
                        if (visible == 'visible') {
                            setvisible('hidden')
                        }
                        else
                            setvisible('visible')
                    }
                    }> <img src={user} alt="user icon" className='w-10 rounded-full'/></h1>
                    <div className={`bg-white ${visible} pl-1 pr-1`}>
                        <h1 className='m-[0.50.rem]  font-semibold  cursor-pointer p-1 hover:bg-yellow-100'>Profile</h1>
                        <h1 className='m-[0.50.rem]  font-semibold cursor-pointer p-1 hover:bg-yellow-100'><a href='/orders'>Orders</a></h1>
                        <h1 className='m-[0.50.rem]  font-semibold cursor-pointer p-1 hover:bg-yellow-100'>Wishlist</h1>
                        <h1 className='m-[0.50.rem]  font-semibold cursor-pointer p-1 hover:bg-yellow-100'>OtakuCash</h1>
                        <h1 className='m-[0.50.rem]  font-semibold cursor-pointer p-1 hover:bg-yellow-100 ' onClick={()=>{logout()}}>LogOut</h1>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar