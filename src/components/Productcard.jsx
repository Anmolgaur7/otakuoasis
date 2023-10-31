import React from 'react'
import { Link } from "react-router-dom";
import "./Productcard.css";

function Productcard(props) {
  return (
    <>
    <a href={`/products/${props?.id}`}>
    <div className='shadow-md m-4 '>
    <div className='w-[15vw] h-auto  bg-white flex flex-col'>
    <img src={props.image} className=' zoom h-96 bg-slate-100 hover:opacity-75 ' />
    <div className='m-4'>
    <h1 className='font-semibold text-lg'>{props.name}</h1>
    <h1 className='text-md font-semibold'>₨{props.price}</h1>    
    <p className='text-md font-normal'>{props.desc}</p>
    </div>
    </div>      
    </div>
    </a>
    </>
  )
}

export default Productcard
