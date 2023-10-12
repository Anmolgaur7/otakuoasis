import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="bg-slate-200 rounded-full m-2 fixed top-2 z-40 left-0 w-screen select-none flex justify-center">
                <div className='flex justify-center items-center'>
                    <a href="/">
                    <h1 className='m-2 text-lg font-semibold text-blue-500' >OtakuOasis</h1>
                    </a>
                </div>
                <ul className='flex'>
                    <li className='m-2 text-lg font-semibold text-black '>Home</li>
                    <li className='m-2 text-lg font-semibold text-black '>About</li>
                    <li className='m-2  text-lg font-semibold text-black'>Services</li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar
