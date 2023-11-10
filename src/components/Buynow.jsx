import React from 'react'
import CanondaleBike from '../assets/canondalebike.png'
import canoYellow from '../assets/cannondaleyellow.jpg'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import Navbar from './Navbar'

const Buynow = () => {
  return (
   <>
   <Navbar />
     <div className='w-full p-16'>
          <div className='max-w-[1240px] mx-auto md:flex gap-20 mb-10'>
              <img src={CanondaleBike} alt="/" className='w-[100%] md:w-[50%]'/>
              <div className='my-5'>
                <h1 className='font-bold text-l'>Color Black, Laguna Yellow</h1>
                <p>Frame SmartForm C3 Alloy, SAVE, tapered head tube, Straightshot hidden cable routing, rack/fender mounts, 360° reflectivity
                  Fork Chromoly, 1-1/8" steerer, OutFront offset, mid-blade mounts
                  Rear Shock Null
                  Rims Cannondale Disc, double wall w/eyelet, 32h
                  Hubs (F) Shimano HB-TX505, QR / (R) Shimano FH-TY505, QR
                  Spokes Stainless Steel, 14g
                  Tires Kenda Kourier, 700 x 35c
                  Pedals Cannondale Fitness
                  Crank Prowheel, 48/38/28
                  Bottom Bracket Cartridge, square taper
                  Chain KMC Z7, 7-speed
                  Rear Cogs Shimano HG200, 12-28, 7-speed
                  Front Derailleur microSHIFT Dual Pull Compact, Band Clamp
                  Rear Derailleur microSHIFT M26L
                  Shifters microSHIFT, 3x7-speed
                  Handlebar 6061 Alloy Double-butted, 25mm rise, 8° sweep, 6° rise, 640mm
                  Grips Cannondale Ergo Fitness
                  Stem 6061 Alloy, 31.8, 8°
                  Headset Semi-Integrated, cage retainer, 1-1/8"
                  E-Bike Charger Null
                  Brakes V-Brake
                  Saddle Cannondale Fitness Ergo Double Density
                  Seatpost 6061 Alloy, 27.2 x 350mm
                  Sizes SM, MD, LG, XL, 2XL   </p>
              </div>
          </div>
          <div>
             <span className='flex items-center'><h2 className='font-bold text-l '>Size:</h2> (Required)</span>
             <div className='grid md:flex items-center md:gap-[10rem] my-3'>
                <div className=' flex gap-5'>
                  <button className='border border-slate-500 p-3'>S</button>
                  <button className='border border-slate-500 p-3'>M</button>
                  <button className='border border-slate-500 p-3'>L</button>
                  <button className='border border-slate-500 p-3'>XL</button>
                  <button className='border border-slate-500 p-3'>2XL</button>
                </div>
                <div className='flex gap-5 mt-5'>
                <button className='border border-slate-500 p-3'>
                  <img src={canoYellow} alt="/" className='max-w-[5rem]'/>
                </button>
                  <button className='border border-slate-500 p-3'>
                    <img src={CanondaleBike} alt="" className='max-w-[5rem]'/>
                  </button>
                </div>
             </div>
          </div>

          <div className='flex gap-10'>
             <div className='mt-5'>
                 <span className='flex items-center'><h2 className='font-bold text-l '>Quantity:</h2></span>
                  <div className='flex border  border-slate-400 w-24 mt-3 gap-6 rounded-sm items-center justify-center'>
                    <button className='text-2xl'>-</button>
                    <span>1</span>
                    <button  className='text-2xl'>+</button>
                  </div>
             </div>
             <div className='mt-5'>
             <span className='flex items-center'><h2 className='font-bold text-l '>Colors:</h2></span>
              <span className='flex gap-2'>
                <input type="radio" name="" id=""/>
                Yellow
              </span>
              <span className='flex gap-2 mb-10'>
                <input type="radio" name="" id=""/>
                Black
              </span>
             </div>
          </div>

          <div className='flex gap-3 md:gap-6 my-2'>
                      <button className='bg-black text-white px-2 md:px-3 lg:px-4 text-xs py-2 rounded-sm hover:bg-white hover:text-black hover:border hover:border-slate-950'>Buy Now</button>
                      <button className='flex items-center gap-2 border-yellow-400 border bg-transparent px-2 md:px-3 lg:px-4 text-sm py-2 rounded-sm hover:bg-yellow-500 hover:text-white'>
                        <HiOutlineShoppingCart size={20}/>
                        Add to Cart</button>
                    </div> 
    </div>
   </>
  )
}

export default Buynow