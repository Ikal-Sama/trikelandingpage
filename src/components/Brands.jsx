import React from 'react'
import {HiOutlineCube} from 'react-icons/hi'
import '../components/brands.css'
import Shimano from '../assets/Shimano.png'
import Trek from '../assets/Trek.png'
import Giant from '../assets/Giant.png'
import Canondale from '../assets/canondale.png'

const Brands = () => {
  return (
    <div className='w-full py-16 px-16 text-white bg-black'>
        <div className='flex items-center gap-3 justify-center'>
            <HiOutlineCube size={30}/>
            <h2 className='text-2xl font-bold'>BRANDS</h2>
        </div>
        <div className='brand-logo mt-5 mx-auto gap-5 flex justify-center items-center w-full z-0'>
          <div className='grid justify-center my-4 gap-28 md:gap-20 py-16 md:flex lg:flex items-center'>
            <img src={Shimano} alt="" className='w-[150px]  lg:w-[155px] md:w-[120px]'/>
            <img src={Trek} alt="" className='w-[150px] lg:w-[155px] md:w-[120px]'/>
            <img src={Giant} alt="" className='w-[150px] lg:w-[155px] md:w-[120px]'/>
            <img src={Canondale} alt="" className='w-[150px] lg:w-[155px] md:w-[120px]'/>
          </div>
        </div>
    </div>
  )
}

export default Brands