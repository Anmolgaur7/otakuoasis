import React from 'react'
import Logo from "../images/oa.png";
import Banner from '../components/Banner';

function Navbar() {
    return (
        <>
            <nav className="bg-slate-200 rounded-full  fixed top-2 z-40 left-0 w-screen select-none  flex justify-center items-center p-1">
                    <a href="/">
                    <img src={Logo} className='w-[8vw] rounded-full'/>
                    </a>
                <ul className='flex'>
                    <li className='m-2 text-lg font-semibold text-black '>Home</li>
                    <li className='m-2 text-lg font-semibold text-black '><a href="/products">Products</a></li>
                    <li className='m-2  text-lg font-semibold text-black'>Services</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
