import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar';
import Footer from '../Footer';
import Hero from '../Hero';
import Brands from '../Brands';
import Products from '../Products';

const Layout = () => {
  return (
    <div>
        
          <Navbar />
          <Hero />
          <Brands />
          <Products />
          <Footer />
        
    </div>
  )
}

export default Layout