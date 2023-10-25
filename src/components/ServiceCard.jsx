import React from 'react'

const ServiceCard = ({imgURL,label,subtext}) => {
  return (
    <div className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='flex justify-center items-center bg-coral-red rounded-full w-11 h-11'>
        <img src={imgURL} alt={label}/>
      </div>
        <h3 className='font-bold text-3xl  py-5'>{label}</h3>
        <p className='text-slate-gray text-2xl font-Montserrat'>{subtext}</p>
    </div>
  )
}

export default ServiceCard