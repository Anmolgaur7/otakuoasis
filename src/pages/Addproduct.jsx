import React from 'react'

function Addproduct() {
  return (
    <div>
      <form className='w-full h-auto flex  flex-col justify-center items-center p-14 bg-slate-100' >
        <h1>Add Product</h1>
        <input type="text" placeholder='Enter Name  of product' className='p-2 m-2 border border-black' />
        <input type="number" placeholder='Enter Price of Product' className='p-2 m-2 border border-black' />
        <input type="text" placeholder='Enter Price of description' className='p-2 m-2 border border-black' />
        <input type="text" placeholder='Enter Name  of Anime ' className='p-2 m-2 border border-black' />
        <label htmlFor="img">Product Image</label>
        <input type="file" className='ml-12 ' name='img'/>



      </form>
    </div>
  )
}

export default Addproduct