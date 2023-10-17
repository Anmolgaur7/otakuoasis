import React from 'react'

function Login() {
  return (
    <div className='h-screen flex justify-center items-center'>
            <form onSubmit={(e) => handlesubmit(e)} className='md: bg-white flex-col flex justify-center items-center p-20 shadow-lg rounded-lg'>
                <h1 className='text-4xl font-mono font-bold'>Welcome Back</h1>
                <h1 className='text-lg font-mono font-normal mb-16'>Sign in to explore</h1>
                <label className='text-lg font-mono font-normal'>Email</label>
                <input type="email" name='email' placeholder='Enter your email' onChange={(e) => setdata({ ...data, email: e.target.value })} className=' p-2 m-2  border bg-slate-100 border-black ' />
                <label className='text-lg font-mono font-normal'>Password</label>
                <input type="password" name='password' placeholder='Enter you password' onChange={(e) => setdata({ ...data, password: e.target.value })} className=' p-2 m-2 border bg-slate-100 border-black' />
                <button className='bg-blue-500 text-lg w-[6rem]  h-[3rem] p-1 font-bold text-white rounded-2xl mt-8 hover:bg-blue-400' type='submit'>Sign In</button>
                <div className='mt-4 font-medium font-mono'>Did'nt have an account? <span className='text-blue-400'><a href="/users/signup">Sign Up</a></span></div>
            </form>
    </div>
  )
}
export default Login
