import React from 'react'
import { reviews } from '../constants'
import CoustomerReviewCard from '../components/CoustomerReviewCard'

const CoustomerReviews = () => {
  return (
    <div>
      <div className='flex justify-center flex-col items-center'>
         <h2 className='font-palanquin text-5xl capitalize font-bold w-f max-sm:text-center max-sm:max-w-[70%]'>What Our <span className=' text-coral-red'>Customers</span> Say?</h2>
         <p className='text-slate-gray text-2xl font-Montserrat mt-7 mb-[5%] lg:max-w-[40%] text-center'>Hear genuine stories from our satisfied customers about their exceptional experiences with us.</p>
      </div>
      <div className='flex justify-center items-center max-sm:flex-wrap max-sm:mt-[15%]  max-lg:flex-wrap'>
           {reviews.map((Review)=>(
                <CoustomerReviewCard key={Review.customerName} imgURL={Review.imgURL}  customerName={Review.customerName} rating={Review.rating}  feedback={Review.feedback}/>
           ))}
      </div>
    </div>
  )
}

export default CoustomerReviews