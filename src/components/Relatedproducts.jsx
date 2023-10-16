import React from 'react'
import { Link } from "react-router-dom";
import Productcard from "../components/Productcard";
import products from "../utils/products";

function Relatedproducts() {
    return (
        <div>
            <h1 className='text-2xl font-semibold m-4' >Related Products</h1>
            <div className='flex justify-center  '>
            {
                products.map((product) => {
                    return (
                    <Productcard id={product.id} link={product.link} name={product.name} desc={product.desc} price={product.price} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default Relatedproducts
