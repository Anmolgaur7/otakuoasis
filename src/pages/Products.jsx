import React,{useState,useEffect} from 'react'
import Productcard from '../components/Productcard'
import { Link } from 'react-router-dom'
import { fetchrequest } from '../utils';


function Products( ) {
  const [Products, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
      setLoading(true)
      const fetchproducts = async () => {
          const prod=await fetchrequest("products/all?","GET")
          console.log( prod);
          if(prod.error){
              setError(true)
          }
          else{
              setProduct(prod)
          }
      }
      fetchproducts()
      setLoading(false)
  }, [])

  const sort=(e)=>{
    e.preventDefault()
    const sort=e.target.sort.value
    const fetchproducts = async () => {
      const prod=await fetchrequest(`products/all?sort=${sort}`,"GET")
      console.log( prod);
      if(prod.error){
          setError(true)
      }
      else{
          setProduct(prod)
      }
  } 
  fetchproducts()
  }
  return (
    <div>
      <div className='mt-20 mb-12'>
        <h1 className='text-2xl font-semibold text-center'>New Arrivals</h1>
        <p className='text-lg font-normal text-center'>Checkout our latest merchendise</p>
      </div>
      <br />
      <div className='flex flex-col justify-center items-center'>
        <div className='flex space-x-3'>
          <div className='flex items-center flex-col'>
            <h1 className='text-lg font-semibold m-4'>Sort</h1>
            <div>
              <form onSubmit={sort}>
              <div>
                <input type="radio" name='sort' id='low' value="asc" className=' mr-2' />
                <label htmlFor="low">Price Low</label>
              </div>
              <div>
                <input type="radio" name='sort' id='high' value="dsc" className=' mr-2' />
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
              <button className='bg-blue-400 text-white rounded-lg p-1' type='submit'>Apply Filter</button>
              </form>
            </div>
          </div>
        </div>
        <div>
        <div className='flex ml-20 flex-wrap'>
        {
          Products.map((product)=>{
            return(
            <Productcard  image={product.image}  id={product._id} link={product.link} name={product.name} desc={product.desc} price={product.Price}/>
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
