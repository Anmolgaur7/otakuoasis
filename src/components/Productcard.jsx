import React from 'react'
import { Link } from "react-router-dom";
function Productcard(props) {
  return (
    <>
    <Link to={`${props?.id}`}>
    <div className='shadow-md m-4 '>
    <div className='w-[13vw] h-[47vh]  bg-white flex flex-col'>
    <img src={props.link} className='m-2 hover:opacity-75 ' />
    <div className='m-4'>
    <h1 className='font-semibold text-lg'>{props.name}</h1>
    <h1 className='text-lg font-semibold'>₨{props.price}</h1>    
    </div>
    </div>      
    </div>
    </Link>
    </>
  )
}

export default Productcard
