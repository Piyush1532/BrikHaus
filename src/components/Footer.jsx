import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='footer'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'> 
        <div className='w-full md:w-1/3 mb-8 md:mb-0 '>
            <img src={assets.brikhaus_logo} alt="" className='w-[110px]'/>
            <p className='text-gray-400 mt-4' >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium, omnis fuga. Iusto porro dolorum unde sequi eos dignissimos, delectus architecto .</p>
        </div>
        <div>
            <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
            <ul>
                <a href="#Header">Home</a>
            </ul>
        </div>
        <div></div>
      </div>


      <div></div>
    </div>
  )
}

export default Footer
