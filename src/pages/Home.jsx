import React from 'react'
import Goku from "../images/luffy.png";
import { Link } from "react-router-dom";
import {Fade} from "react-awesome-reveal";
import Productcard from "../components/Productcard";
import products from "../utils/products";
import Banner from '../components/Banner';
function Home() {
  return (
    <>
    <Banner/>
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-11xl text-center mb-24  font-bold absolute text-blue-800 '>Hello&nbsp; &nbsp; &nbsp;Senpai!</h1>
      <img src={Goku}  className='h-[80%] relative right-28' />
    </div>
    <div>
      <h1 className='text-2xl font-semibold'>Featured Products</h1>
      <div className='flex justify-center flex-wrap'>
        {
          products.map((product)=>{
            return(
            <Productcard id={`${product.id}`} link={product.link} name={product.name} desc={product.desc} price={product.price}/>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Home
