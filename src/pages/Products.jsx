import React from 'react'
import Productcard from '../components/Productcard'
import { Link } from 'react-router-dom'

function Products( ) {
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
    <div>
      <div className='mt-20 mb-12'>
        <h1 className='text-2xl font-semibold text-center'>New Arrivals</h1>
        <p className='text-lg font-normal text-center'>Checkout our latest merchendise</p>
      </div>
      <br />
      <div className='flex justify-center items-center'>
        <div>
          <div className='flex items-center flex-col'>
            <h1 className='text-lg font-semibold m-4'>Sort</h1>
            <div>
              <div>
                <input type="radio" name='sort' id='low' className=' mr-2' />
                <label htmlFor="low">Price Low</label>
              </div>
              <div>
                <input type="radio" name='sort' id='high' className=' mr-2' />
                <label htmlFor="high">Price high</label>
              </div>
              <div>
                <input type="radio" name='sort' id='bestselling' className=' mr-2' />
                <label htmlFor="bestselling">Best selling</label>
              </div>
              <div>
                <input type="radio" name='sort' id='featured' className=' mr-2' />
                <label htmlFor="featured">Featured</label>
              </div>
            </div>
          </div>
          <div className='flex items-center flex-col'>
            <h1 className='text-lg font-semibold m-4'>Category</h1>
            <div>
              <label htmlFor="arrivals"> NewArrivals</label>
              <input type="checkbox" name="arrivals" id="arrivals" className='ml-2' />
            </div>
            <div>
              <label htmlFor="tees">Tees</label>
              <input type="checkbox" name="tees" id="tees"className='ml-2' />
            </div>
            <div>
              <label htmlFor="Action">Action</label>
              <input type="checkbox" name="Action" id="Action"className='ml-2' />
            </div>
            <div>
              <label htmlFor="Posters">Posters</label>
              <input type="checkbox" name="Posters" id="Posters" className='ml-2'/>
            </div>
            <div>
              <label htmlFor="merchandise"className='ml-[px]'>Merchandise</label>
              <input type="checkbox" name="merchandise" id="merchandise" className='' />
            </div>
          </div>
        </div>
        <div>
        <div className='flex ml-20 flex-wrap'>
        {
          products.map((product)=>{
            return(
            <Productcard  id={product.id} link={product.link} name={product.name} desc={product.desc} price={product.price}/>
            )
          })
        }
        </div>
        </div>
      </div>


    </div>
  )
}

export default Products
