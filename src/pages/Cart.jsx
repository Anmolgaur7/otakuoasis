import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cartitems,setcart]=useState([]);
    const  [quantity,setquantity]=useState(1);
    const navigate=useNavigate();
    const checkout=()=>{
        navigate('/checkout')
    }
    useEffect(()=>{
        const cart=JSON.parse(localStorage.getItem('cart'))||[]
        setcart(cart)
    },[])
    const handleremove=(productid)=>{

        const cart=JSON.parse(localStorage.getItem('cart'))||[]
        const newcart=cart.filter((item)=>item._id!==productid)
        localStorage.setItem('cart',JSON.stringify(newcart))
        setcart(newcart)
    }
    console.log(cartitems)
   const total=cartitems.reduce((acc,item)=>acc+item.Price*item.quantity,0)
   localStorage.setItem('total',total)
    return (
        <div className='bg-cartbg bg-cover rounded-2xl  flex justify-center items-center '>

                    <div class="mx-auto  mt-8 max-w-md md:mt-12">
                        <div class="rounded-3xl bg-slate-100 mb-8 pt-5  shadow-lg">
                            <h1 className=' text-center text-2xl font-semibold flex justify-center items-center'>Senpai's Cart</h1>
                            <div class="px-4 py-6 sm:px-8 sm:py-10">
                                <div class="flow-root">
                                    <ul class="-my-8">

                                        {
                                        cartitems.map((item)=>{
                                        return(
                                            <li  class="flex flex-col space-y-3 py-6 text-left sm:flex-row sm:space-x-5 sm:space-y-0">
                                            <div class="shrink-0 relative">
                                                <span class="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{item.quantity}</span>
                                                <img class="h-24 w-24 max-w-full rounded-lg object-cover" src={item.image} alt="" />
                                            </div>

                                            <div class="relative flex flex-1 flex-col justify-between">
                                                <div class="sm:col-gap-5 sm:grid sm:grid-cols-2">
                                                    <div class="pr-8 sm:pr-5">
                                                        <p class="text-base font-semibold text-gray-900">{item.name}</p>
                                                    </div>
                                                    <div class="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                                                        <p class="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">₨&nbsp;{item.Price}</p>
                                                    </div>
                                                </div>
                                                <select name="quantity" className='w-[2rem] mb-8' onChange={(e)=>{
                                                    const newcart=cartitems.map((cartitem)=>{
                                                        if(cartitem._id===item._id){
                                                            cartitem.quantity=e.target.value
                                                        }
                                                        return cartitem
                                                    })
                                                    localStorage.setItem('cart',JSON.stringify(newcart))
                                                }}>
                                                    <option value="1" selected>1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option >
                                                    <option value="4">4</option>
                                                    <option value="5">5</option>
                                                    <option value="6">6</option >
                                                    <option value="7">7</option>
                                                    <option value="8">8</option>
                                                </select>
                                                <div class="absolute top-0 right-0 flex sm:bottom-0 sm:top-auto">
                                                    <button type="button" class="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={()=>handleremove(item._id)}>
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" class=""></path>
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        </li>
                                        )    
                                        }
                                        ) 
                                        }
                                    </ul>
                                </div>
                                <div class="mt-6 flex justify-center items-center">
                                        <button><a href="/cart" className='group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-4 py-2 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800 ' target="_blank" rel="noopener noreferrer">Update Quantity</a> </button>
                                </div>
                                <hr class="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

                                <div class="mt-6 space-y-3 border-t border-b py-8">
                                    <div class="flex items-center justify-between">
                                        <p class="text-gray-400">Subtotal</p>
                                        <p class="text-lg font-semibold text-gray-900">${Number(total)}</p>
                                    </div>
                                    <div class="flex items-center justify-between">
                                        <p class="text-gray-400">Shipping</p>
                                        <p class="text-lg font-semibold text-gray-900">$8.00</p>
                                    </div>
                                </div>
                                <div class="mt-6 flex items-center justify-between">
                                    <p class="text-sm font-medium text-gray-900">Total</p>
                                    <p class="text-2xl font-semibold text-gray-900"><span class="text-xs font-normal text-gray-400">INR</span>&nbsp;{Number(total)+8}</p>
                                </div>

                                <div class="mt-6 text-center">
                                    <button type="button" class="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800" onClick={checkout}>
                                        Place Order
                                        <svg xmlns="http://www.w3.org/2000/svg" class="group-hover:ml-8 ml-4 h-6 w-6 transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default Cart
