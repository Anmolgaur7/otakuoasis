import React, { useEffect, useState } from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import Checkoutform from '../components/Checkoutform'

const stripepromise = loadStripe("pk_test_51O7ctDSHY56XZU6lLSpO2HWofdo1xdXFmcoeRFp1faUWYJgXcNuLsjReumhpdBEAgq29AmCnSj5F5DXOg6IFE2h700o4mrKYp3");


function Checkout() {
  const [clientSecret, setsc] = useState(null)
  const cart = JSON.parse(localStorage.getItem("cart"))
  const [order, setorder] = useState({
    Name: "",
    Email: "",
    Address: "",
    City: "",
    Country: "",
    Postalcode: "",
    Phonenumber: "",
    Orderitem: cart
  })
  const placeorder = async (e) => {
    try {
      e.preventDefault()
      const response = await fetch("http://localhost:8000/api/order/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: { order}
      })
      const res = await response.json()
      console.log(res);

    } catch (error) {
      console.log(error);
    }

  }
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
  };
  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <div>
      <div class="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
        <a href="/home" class="text-2xl font-bold text-gray-800">OtakuOasis</a>
      </div>
      <div class="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
        <div class="px-4 pt-8">
          <div>
            <h1 className='font-serif text-2xl font-semibold'>Order Form</h1>
            <form className='m-2'onSubmit={(e)=>{payment().then(placeorder(e))}}>
              <input type="text" placeholder="Name" name='Name' onChange={(e) => setorder({ ...order, Name: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="Email" name='Email' onChange={(e) => setorder({ ...order, Email: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="Address" name='Address' onChange={(e) => setorder({ ...order, Address: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="City" name='City' onChange={(e) => setorder({ ...order, City: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="Country" name='Country' onChange={(e) => setorder({ ...order, Country: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="PostalCode" name='PostalCode' onChange={(e) => setorder({ ...order, Postalcode: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <input type="text" placeholder="PhoneNumber" name='PhoneNumber' onChange={(e) => setorder({ ...order, Phonenumber: e.target.value })} className='border-2 border-gray-300 rounded-md p-2 w-full mb-4' />
              <button class="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white" type='submit'>Place Order</button>
            </form>
          </div>
        </div>
        <div class="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
          <p class="text-xl font-medium">Order Summary</p>
          <p class="text-gray-400">Check your items. And select a suitable shipping method.</p>

          <div class="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            {
              cart.map((item) => {
                return (
                  <div class="flex flex-col rounded-lg bg-white sm:flex-row">
                    <img class="m-2 h-20 w-24 rounded-md border object-cover object-center" src={item.image} alt="" />
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
          <p class="text-xl font-medium">Payment Details</p>
          <p class="text-gray-400">Complete your order by providing your payment details.</p>
          {
            clientSecret && (
              <Elements stripe={stripepromise} options={options}>
                <Checkoutform />
              </Elements>
            )
          }
        </div>
      </div>
    </div>
  )
}
export default Checkout
