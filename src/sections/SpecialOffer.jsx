import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
      <div className='flex-1'>
         <img src={offer} height={687} width={773}/>
      </div>
      <div className='flex flex-col flex-1'>
         <h2 className='font-palanquin text-5xl capitalize font-bold lg:max-w-lg'><span className=' text-coral-red'>Special</span> Offer</h2>
         <p className='text-slate-gray text-2xl font-Montserrat mt-7 lg:max-w-[80%]'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
         <p className='text-slate-gray text-2xl font-Montserrat mt-6 mb-11 lg:max-w-[60%]'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
      <div className='flex gap-8 flex-1'>
        <Button label='View Details' />
        <Button label='Learn more' backgroundColor='bg-white' textColor='text-slate-gray' borderColor='border-slate-gray' />
      </div>
      </div>
    </section>
  )
}

export default SpecialOffer