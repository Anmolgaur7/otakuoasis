import React from 'react'
import Logo from "../images/oa.png";
import Banner from '../components/Banner';

function Navbar() {
    return (
        <>
            <nav className="flex justify-center items-center h-[11vh] bg-amber-50 mb-5">
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
