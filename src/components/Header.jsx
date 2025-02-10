import React from 'react'
import Navbar from './navbar'

const Header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage:"url('https://images.unsplash.com/photo-1710435481828-124680f5a3e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHZpbGxhcyUyMGF0JTIwZXZlbmluZ3xlbnwwfHwwfHx8MA%3D%3D')"}} id='Header'>
      <Navbar/>
      <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams </h2>
        <div className='space-x-6 mt-16'>
            <a href="#projects" className='border border-white px-8 py-3 rounded'>Projects</a>
            <a href="#contact" className='border bg-blue-500 px-8 py-3 rounded'>Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Header
