import React, { useState,useEffect } from 'react'

function Addproduct() {
  const [data, setdata] = useState({
    name: '',
    Price: '',
    description: '',
    Anime: '',
    image: '', 
    featured: true
  })
  const uploadimage=async(file)=>{
    const formdata=new FormData();
    formdata.append('file',file);
    formdata.append('upload_preset','Otakuoasis');
    formdata.append('cloud_name','dgbajxlpn');
    const res=await fetch('https://api.cloudinary.com/v1_1/dgbajxlpn/image/upload',{
      method:'POST',
      body:formdata
    })
    const resdata=await res.json();
    console.log(resdata);
    return {url:resdata.secure_url}
  }
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    const {url}=await uploadimage(data.image)
    console.log(url);
    if (!url) {
      alert('Please Upload Image')
      return
    }
    const res = await fetch('http://localhost:8000/api/products/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...data, image: url })
    })
    if (res.status === 200) {
      alert('Product Added')
      setdata({
        name: '',
        Price: '',
        description: '',
        Anime: '',
        image: '',
        featured: true
      }) 
    }
    console.log(data);
    const resdata = await res.json()
    console.log(resdata);
    if (resdata.error) {
      alert(resdata.error)
    }
    else {
      alert('Product Added')
    } 
  }
  useEffect(() => {
    if(!localStorage.getItem("token")){
      window.location.href("/login")
    }
    // handleorder()
  }, [])
  return (
    <div>
      <form className='w-full h-screen flex  flex-col justify-center items-center p-14 text-xl font-mono bg-slate-100' onSubmit={handlesubmit} >
        <h1 >Add Product</h1>
        <h1>Name</h1>
        <input type="text" name='Pname' placeholder='Enter Name  of product' onChange={(e) => setdata({ ...data, name: e.target.value })} className='p-2 m-2 border border-black' />
        <h1>Price</h1>
        <input type="text" name='PPrice' placeholder='Enter Price of Product' onChange={(e) => setdata({ ...data, Price: e.target.value })} className='p-2 m-2 border border-black' />
        <h1>Description</h1>
        <input type="text" name='Desc' placeholder='Enter Price of description' onChange={(e) => setdata({ ...data, description: e.target.value })} className='p-2 m-2 border border-black' />
        <h1>Anime</h1>
        <input type="text" name='Anime' placeholder='Enter Name  of Anime ' onChange={(e) => setdata({ ...data, Anime: e.target.value })} className='p-2 m-2 border border-black' />
        <label htmlFor="img">Product Image</label>
        <input type="file" name='img' className='ml-12 ' onChange={(e) =>setdata({...data,image:e.target.files[0]})}/>
        <button type='submit' className='bg-blue-500 text-lg w-[6rem] h-[4rem] p-1 font-bold text-white rounded-2xl mt-8 hover:bg-blue-400'>Add Product</button>
      </form>
    </div>
  )
}

export default Addproduct