import React from 'react'
import {AiOutlineStar} from 'react-icons/ai'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import ShimanoBike from '../assets/shimanobike.jpg'
import GiantBike from '../assets/giantbike.png'
import CanondaleBike from '../assets/canondalebike.png'
import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <div className='w-full bg-white p-16'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='flex items-center gap-3 justify-center text-sky-500'>
                <AiOutlineStar size={30}/>
                <h2 className='uppercase text-xl md:text-2xl font-bold '>Popular Products</h2>
            </div>
            <div className='grid md:flex justify-between items-center md:px-20  mt-20'>
                <img src={GiantBike} alt="/" className='w-[25rem]' />
                <div className='max-w-[500px] border-l px-4'>
                  <h1 className='text-l md:text-xl sm:text-lg font-bold my-2'>Mountain Bike #26</h1>
                  <p>Price: ₱7,199.20</p>
                  <div className='flex items-center gap-3'>
                    <p>Ratings:</p>
                    <span className='flex gap-2 my-2'>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                    </span>
                  </div>
                    <div className='flex gap-3 md:gap-6 my-2'>
                      <button className='bg-black text-white px-2 md:px-3 lg:px-4 text-xs py-2 rounded-sm hover:bg-white hover:text-black hover:border hover:border-slate-950'>Buy Now</button>
                      <button className='flex items-center gap-2 border-yellow-400 border bg-transparent px-2 md:px-3 lg:px-4 text-sm py-2 rounded-sm hover:bg-yellow-500 hover:text-white'>
                        <HiOutlineShoppingCart size={20}/>
                        Add to Cart</button>
                    </div> 
                </div>
            </div>
          
            <div className='grid md:flex justify-between items-center md:px-20 mt-20'>
                <img src={GiantBike} alt="/" className='w-[25rem]' />
                <div className='max-w-[500px] border-l px-4 '>
                  <h1 className='text-l md:text-xl sm:text-lg font-bold my-2'>GIANT TALON 29 2 2022</h1>
                  <p>Price: ₱26,000.00</p>
                  <div className='flex items-center gap-3'>
                    <p>Ratings:</p>
                    <span className='flex gap-2 my-2'>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                    </span>
                  </div>
                    <div className='flex gap-3 md:gap-6 my-2'>
                      <button className='bg-black text-white px-2 md:px-3 lg:px-4 text-xs py-2 rounded-sm hover:bg-white hover:text-black hover:border hover:border-slate-950'>Buy Now</button>
                      <button className='flex items-center gap-2 border-yellow-400 border bg-transparent px-2 md:px-3 lg:px-4 text-sm py-2 rounded-sm hover:bg-yellow-500 hover:text-white'>
                        <HiOutlineShoppingCart size={20}/>
                        Add to Cart</button>
                    </div> 
                </div>
            </div>

            <div className='grid md:flex justify-between items-center md:px-20 mt-24'>
                <img src={CanondaleBike} alt="/" className='w-[25rem]' />
                <div className='max-w-[500px] border-l px-4'>
                  <h1 className='text-l md:text-xl sm:text-lg font-bold my-2'>Quick 6</h1>
                  <p>Price: ₱19, 896.63</p>
                  <div className='flex items-center gap-3'>
                    <p>Ratings:</p>
                    <span className='flex gap-2 my-2'>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                      <AiOutlineStar size={20} className='text-yellow-500'/>
                    </span>
                  </div>
                    <div className='flex gap-3 md:gap-6 my-2'>
                      <button className='bg-black text-white px-2 md:px-3 lg:px-4 text-xs py-2 rounded-sm hover:bg-white hover:text-black hover:border hover:border-slate-950'>
                        <Link to='buynow'>Buy Now</Link>
                      </button>
                      <button className='flex items-center gap-2 border-yellow-400 border bg-transparent px-2 md:px-3 lg:px-4 text-sm py-2 rounded-sm hover:bg-yellow-500 hover:text-white'>
                        <HiOutlineShoppingCart size={20}/>
                        Add to Cart</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Products