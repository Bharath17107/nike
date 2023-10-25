import React from 'react'
import { products } from '../constants'
import PopularProductCard from '../components/PopularProductCard'
const Popular = () => {
  return (
      <section id='products' className='max-sm:mt-12'>
         <div className='flex justify-start flex-col'>
           <h1 className='font-palanquin text-6xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>Our <span className=' text-coral-red'>Popular</span> Products</h1>
           <p className='text-xl text-slate-500 mt-[2%] w-[35%] font-Montserrat'>Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
         </div>
         <div className='grid lg:grid-cols-4 mt-20 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
         {products.map((product)=>(
            <PopularProductCard imgURL={product.imgURL} name={product.name} price={product.price} />
         ))}
         </div>
      </section>
  )
}

export default Popular