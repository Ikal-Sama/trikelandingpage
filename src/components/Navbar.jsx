import React, {useState} from 'react'
import {HiOutlineShoppingCart} from 'react-icons/hi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import '../components/brands.css'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <div className='w-full bg-black text-white px-16 py-4'>
        <div className='flex justify-between items-center'>
            <Link to='/'><h1 className='text-2xl'>TRIKE</h1></Link>
            <div className='hidden md:block'>
                <ul className='flex gap-10 items-center'>
                    <li className='font-sm'>About</li>
                    <li className='font-sm'>Shop</li>
                    <li className='font-sm'>Popular Bikes</li>
                    <li className='font-sm'>Brands</li>
                </ul>
            </div>
            <div className='hidden md:block'>
                <div className='flex items-center gap-5'>
                    <HiOutlineShoppingCart className='text-sky-500' size={20}/>
                    <button className='bg-[#000AFF] rounded-sm px-4 py-1'>Sign in</button>
                </div>
            </div>
            <div onClick={handleNav}  className='block md:hidden cursor-pointer'>
            {nav ?  <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
        </div>
        <div className={nav ? ' fixed left-0 top-0 w-[60%] rounded-tr-lg rounded-br-lg border-r h-full border-r-gray-200 bg-black text-white ease-in-out duration-500 z-10': 'fixed left-[-100%] ease-in-out duration-300'}>
            <h1 className='text-sky-300 text-2xl w-full m-4'>TRIKE.</h1>
            <ul className='p-4 uppercase'>
                    <li className='font-sm border-b my-3'>About</li>
                    <li className='font-sm border-b my-3'>Shop</li>
                    <li className='font-sm border-b my-3'>Popular Bikes</li>
                    <li className='font-sm border-b my-3'>Brands</li>
            </ul>
            <div className='block items-center p-4 my-4'>
                    <div className='flex items-center gap-3 my-4'>
                        <HiOutlineShoppingCart className='text-sky-500' size={20}/>
                        <span>CART</span>
                    </div>
                    <button className='bg-[#000AFF] rounded-sm px-4 py-1'>Sign in</button>
                </div>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar