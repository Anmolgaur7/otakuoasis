import React, { useEffect ,useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Register() {
    const navigate=useNavigate()
    const [data, setdata] = useState({
      name: '',
      email: '',
      password: ''
    })
    const handlesubmit = async (e) => {
        alert (data)
        try {
            e.preventDefault()
            const { name,email, password } = data
            const response = await fetch("http://localhost:8000/api/auth/register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: JSON.stringify({ name,email,password }) 
            })
            const res = await response.json()
            console.log(res); 
            if(res.error){
              toast.error(res.error)
            }
            else{
              toast.success("Register Successfull")
              navigate('/login')
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <>
    <ToastContainer/>
    <div>
    <div className='h-screen flex justify-center items-center'>
      <form onSubmit={(e) => handlesubmit(e)} className='md: bg-white flex-col flex justify-center items-center p-20 shadow-lg rounded-lg'>
        <h1 className='text-4xl font-mono font-bold'>Welcome Back</h1>
        <h1 className='text-lg font-mono font-normal mb-16'>Sign Up </h1>
        <label className='text-lg font-mono font-normal'>Name</label>
        <input type="text" name='name' placeholder='Enter your email' onChange={(e) => setdata({ ...data, name: e.target.value })} className=' p-2 m-2  border bg-slate-100 border-black ' />
        <label className='text-lg font-mono font-normal'>Email</label>
        <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setdata({ ...data, email: e.target.value })} className=' p-2 m-2  border bg-slate-100 border-black ' />
        <label className='text-lg font-mono font-normal'>Password</label>
        <input type="password" name='password' placeholder='Enter you password' onChange={(e) => setdata({ ...data, password: e.target.value })} className=' p-2 m-2 border bg-slate-100 border-black' />
        <button className='bg-blue-500 text-lg w-[6rem]  h-[3rem] p-1 font-bold text-white rounded-2xl mt-8 hover:bg-blue-400' type='submit'>Sign In</button>
        <div className='mt-4 font-medium font-mono'>have an account ? <span className='text-blue-400'><a href="/login">Sign In</a></span></div>
      </form>
    </div>
    </div>
    </>
  )
}

export default Register
