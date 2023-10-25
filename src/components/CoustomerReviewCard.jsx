import React from 'react'
import { star } from '../assets/icons'

const CoustomerReviewCard = ({imgURL,customerName,rating,feedback}) => {
  return (
    <div>
        <div className='flex justify-center items-center flex-col text-center max-sm:mt-[10%] max-lg:mt-[10%]'>
            <img className='rounded-full' width={140} src={imgURL}/>
            <p className='text-slate-gray text-2xl font-Montserrat lg:max-w-[55%] mt-8 max-lg:max-w-[90%] max-sm:w-full'>{feedback}</p>
            <div className='flex gap-3'>
                <img src={star} width={30}/>
                <p className='text-2xl text-slate-500 font-Montserrat py-3'>({rating})</p>
            </div>
            <h3 className='font-bold text-3xl'>{customerName}</h3>
        </div>
    </div>
  )
}

export default CoustomerReviewCard