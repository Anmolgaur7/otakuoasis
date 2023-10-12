import React from 'react'

function Productcard(props) {
  return (
    <div className>
    <div className='w-[14rem] bg-white flex flex-col'>
    <img src={props.link} className='m-2 hover:opacity-75 ' />
    <div className='m-4'>
    <h1 className='font-semibold text-lg'>Basic tee</h1>
    <h1>₨ 500</h1>    
    </div>
    </div>      
    </div>
  )
}

export default Productcard
