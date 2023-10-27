import React, { useEffect,useState } from 'react'
import Goku from "../images/luffy.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import Productcard from "../components/Productcard";
import Banner from '../components/Banner';
import { fetchrequest } from '../utils';
function Home() {
  useEffect(() => {
    document.title = "Home | OtakuOasis";
  }, []);
  const [Products, setProduct] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
      setLoading(true)
      const fetchproducts = async () => {
          const prod=await fetchrequest("products/all","GET")
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

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <h1 className='text-6xl font-bold text-blue-800'>Loading...</h1>
      </div>
    )
  }
  
  return (
    <>
      <div className='h-screen flex justify-center items-center '>
        <h1 className='text-11xl text-center mb-24  font-bold absolute text-blue-800 '>Hello&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Senpai!</h1>
        <img src={Goku} className='h-[80%]  relative right-28' />
      </div>
      <div>
        <h1 className='text-5xl font-semibold m-5'>Featured Products</h1>
        <div className='flex m-2 overflow-y-scroll'>
          {
            loading ?
            <div className='animate-pulse flex flex-col space-y-10'>
            Loading
            </div>:error?<h1 className='text-2xl text-center font-semibold'>Error</h1>:
           Products.map((product) => {
              return (
                <Fade triggerOnce>
                  <Productcard id={`${product._id}`} link={product.link} name={product.name} desc={product.description} price={product.Price} />
                </Fade>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
export default Home
