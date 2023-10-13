import React from 'react'
import Goku from "../images/luffy.png";
import { Link } from "react-router-dom";
import {Fade} from "react-awesome-reveal";
import Productcard from "../components/Productcard";
function Home() {
  const products=[
    {
     id:1,
     name:'Basic tee',
     desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, recusandae illum dolorio, eius soluta, qui autem?',
     price:200,
     link:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg'
    },
    {
      id:2,
      name:'Basic tee',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. to, eius soluta, qui autem?',
      price:200,
      link:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
     },{
      id:3,
      name:'Basic tee',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officrupti laborum ab libero architecto, eius soluta, qui autem?',
      price:200,
      link:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg'
     },{
      id:4,
      name:'Basic tee',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisicingtam corrupti laborum ab libero architecto, eius soluta, qui autem?',
      price:200,
      link:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg'
     },{
      id:5,
      name:'Basic tee',
      desc:'Lorem ipsum dolor, sit amet consectetur adipisa totam corrupti laborum ab libero architecto, eius soluta, qui autem?',
      price:200,
      link:'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'
     },]
  return (
    <>
    <div className='h-screen flex justify-center items-center'>
      <h1 className='text-11xl text-center mb-24  font-bold absolute '>Hello&nbsp; &nbsp; &nbsp;Senpai!</h1>
      <img src={Goku}  className='h-[80%] relative right-28' />
    </div>
    <div>
      <h1 className='text-2xl font-semibold'>Featured Products</h1>
      <div className='flex justify-center flex-wrap'>
        {
          products.map((product)=>{
            return(
            <Link to={`/products/${product?.id}`}>
            <Productcard link={product.link} name={product.name} desc={product.desc} price={product.price}/>
            </Link>
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Home
