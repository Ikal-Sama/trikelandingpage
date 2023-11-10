import React from 'react'

const Footer = () => {
  return (
    <div className='w-full text-white bg-black px-16 py-8'>
        <div className='grid md:grid-cols-3 items-center max-w-[1240px]'>
            <h1 className='text-2xl font-bold mb-5'>TRIKE</h1>
            <ul className='flex gap-8 text-slate-300'>
                    <li className='font-sm'>About</li>
                    <li className='font-sm'>Shop</li>
                    <li className='font-sm'>Popular Bikes</li>
                    <li className='font-sm'>Brands</li>
            </ul>
            <div className='md:ms-28 mt-5 text-slate-300'>
                <p>Email us:</p>
                <span className='text-sm'>Trike.shop@gmail.com</span>
            </div>
        </div>
        
    </div>
  )
}

export default Footer