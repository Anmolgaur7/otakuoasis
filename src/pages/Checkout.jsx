import React, { useEffect,useState} from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Checkoutform from '../components/Checkoutform'

const stripepromise=loadStripe("pk_test_51O7ctDSHY56XZU6lLSpO2HWofdo1xdXFmcoeRFp1faUWYJgXcNuLsjReumhpdBEAgq29AmCnSj5F5DXOg6IFE2h700o4mrKYp3");

function Checkout() {
  const [clientSecret,setsc]=useState(null)
  const cart=JSON.parse(localStorage.getItem("cart"))
  const payment = async () => {
    const response = await fetch("http://localhost:8000/api/payment/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
         cart
      })
    });
    const data = await response.json();

    setsc(data.clientSecret)
    console.log(data.clientSecret)
  };
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  useEffect(() => {
    payment()
  }, [])
  return (
    <div>
       <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
  <a href="#" class="text-2xl font-bold text-gray-800">OtakuOasis</a>
  <div class="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
    <div class="relative">
      <ul class="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700" href="#"
            ><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg
          ></a>
          <span class="font-semibold text-gray-900">Shop</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2" href="#">2</a>
          <span class="font-semibold text-gray-900">Shipping</span>
        </li>
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <li class="flex items-center space-x-3 text-left sm:space-x-4">
          <a class="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white" href="#">3</a>
          <span class="font-semibold text-gray-500">Payment</span>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
  <div class="px-4 pt-8">
    <p class="text-xl font-medium">Order Summary</p>
    <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>
    
    <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
    {
      cart.map((item)=>{
        return(
          <div class="flex flex-col rounded-lg bg-white sm:flex-row">
          <img class="m-2 h-24 w-28 rounded-md border object-cover object-center" src={item.image} alt="" />
          <div class="flex w-full flex-col px-4 py-4">
            <span class="font-semibold">{item.name}</span>
            <span class="float-right font-semibold text-gray-400">₨{item.Price}</span>
            <p>{item.quantity}</p>
          </div>
        </div>
        )
      })
    }
    </div>
  </div>
  <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
    <p class="text-xl font-medium">Payment Details</p>
    <p class="text-gray-400">Complete your order by providing your payment details.</p>
    {
      clientSecret&&(
        <Elements stripe={stripepromise} options={options}>
          <Checkoutform />
        </Elements>
      )
    }
    <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">Place Order</button>
  </div>
  </div>
  </div>
  )
}
export default Checkout
