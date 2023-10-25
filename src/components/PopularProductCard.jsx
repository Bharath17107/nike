import React from 'react'
import { star } from '../assets/icons'
const PopularProductCard = ({imgURL,name,price}) => {
  return (
    <div>
      <img src={imgURL} width={350} height={20}/>
      <div className='flex gap-3 items-center pt-8 pb-5'>
        <img src={star} width={30}/>
        <p className='text-2xl text-slate-500 font-Montserrat'>(4.5)</p>
      </div>
      <h3 className='text-3xl font-bold font-Palanquin'>{name}</h3>
      <p className='pt-4 text-xl  text-coral-red font-bold'>{price}</p>
    </div>
  )
}

export default PopularProductCard