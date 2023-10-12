import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="bg-slate-200 p-3  flex justify-between rounded-full w-full sticky">
             <div className='flex justify-center items-center'>
              <h1 className='m-2 text-lg font-semibold text-blue-500' >OtakuOasis</h1>  
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
