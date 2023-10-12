import React from 'react'
import Goku from "../images/goku.png";
import {Fade} from "react-awesome-reveal";
import Productlist from '../components/productlist';
function Home() {
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-10xl text-center mb-24 font-bold absolute '>Hello&nbsp;&nbsp; &nbsp; &nbsp;Senpai!</h1>
      <img src={Goku}  className='h-[80%] relative right-14' />
    </div>
    <Productlist/>
    </>
  )
}

export default Home
