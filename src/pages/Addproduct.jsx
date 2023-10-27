import React, { useState } from 'react'

function Addproduct() {
  const [data, setdata] = useState({
    Pname: '',
    PPrice: '',
    Desc: '',
    Anime: '',
    img: '', 
    featured: true
  })
  const handlesubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('http://localhost:8000/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resdata = await res.json()
    console.log(resdata);
    if (resdata.error) {
      alert(resdata.error)
    }
    else {
      alert('Product Added')
    } 
  }

  return (
    <div>
      <form className='w-full h-auto flex  flex-col justify-center items-center p-14 bg-slate-100' onSubmit={handlesubmit} >
        <h1>Add Product</h1>
        <input type="text" name='Pname' placeholder='Enter Name  of product' onChange={(e) => setdata({ ...data, Pname: e.target.value })} className='p-2 m-2 border border-black' />
        <input type="text" name='PPrice' placeholder='Enter Price of Product' onChange={(e) => setdata({ ...data, PPrice: e.target.value })} className='p-2 m-2 border border-black' />
        <input type="text" name='Desc' placeholder='Enter Price of description' onChange={(e) => setdata({ ...data, Desc: e.target.value })} className='p-2 m-2 border border-black' />
        <input type="text" name='Anime' placeholder='Enter Name  of Anime ' onChange={(e) => setdata({ ...data, Anime: e.target.value })} className='p-2 m-2 border border-black' />
        {/* <input type="text" name='featured' placeholder='Enter featured' onChange={(e) => setdata({ ...data, featured: e.target.value })} className='p-2 m-2 border border-black' /> */}
        <label htmlFor="img">Product Image</label>
        {/* <input type="file" className='ml-12 ' onChange={(e) => setdata({ ...data, img: e.target.value })} name='img' /> */}
        <button type='submit' className='bg-blue-500 text-lg w-[6rem]  h-[3rem] p-1 font-bold text-white rounded-2xl mt-8 hover:bg-blue-400'>Add Product</button>
      </form>
    </div>
  )
}

export default Addproduct