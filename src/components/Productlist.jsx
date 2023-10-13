import React from 'react'
import Productcard from './Productcard'

function Productlist() {
    return (
        <>
        <div className='flex  flex-col items-center'>
        <h1 className='text-2xl font-semibold m-4'>Featured Products</h1>
        <div className='flex justify-center items-center flex-wrap'>
        <Productcard link={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg'}/>
        <Productcard link={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg'}/>
        <Productcard link={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg'}/>
        <Productcard link={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-04.jpg'}/>
        <Productcard link={'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-03.jpg'}/>
        </div>
        </div>
        </>
    )
}

export default Productlist
