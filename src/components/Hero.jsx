import React from 'react'
import Avatars from '../assets/AVATARS.png'

const Hero = () => {
  return (
    <div className='text-white w-full py-16 px-16 bg-hero-pattern bg-cover h-screen'>
       <div className='max-w-[1240px] mx-auto'>
        <h1 className='mt-5 font-bold text-2xl md:w-[500px] w-full sm:text-3xl md:text-4xl md:leading-10 leading-10 text-sky-200'>A Very Affordable Bikes, 
         Shop all you want and we Deliver
            it In your Door</h1>
        <p className='mt-5 text-xl md:text-2xl'>Fast delivery and very accommodating riders</p>
        <div className='flex items-center gap-5'>
            <img src={Avatars} alt="/" className='my-10  text-sm md:text-sm font-thin'/>
            <p>more than a thousand users</p>
        </div>
        <button className='bg-[#000AFF] rounded-sm px-4 py-2'>Get Started</button>
       </div>
    </div>
  )
}

export default Hero