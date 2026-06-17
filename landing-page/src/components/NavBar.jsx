import React from 'react'
import { ArrowRight } from 'lucide-react';

const NavBar = () => {
  return (
    <div className='w-full h-15 flex justify-between items-center px-12'>
          <div className='flex gap-2 items-center text-lg font-semibold'><img className='h-7 object-contain' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGhsDNkLfPOjAV9PJx9WDmXx0X6PJEv1fxvuUlNEXNQls91nkjePGS1ICA&s=10" alt="" /> Shopify</div>
          <div className='flex gap-8'>
            <ul>Home</ul>
            <ul>About Us</ul>
            <ul>Furniture Types</ul>
            <ul>Shop by Room</ul>
          </div>
          <div className='h-fit w-fit bg-black px-4 py-2 text-white rounded-xl flex gap-2 text-sm items-center cursor-pointer'>Shop now <ArrowRight size={16} /> </div>
        </div>
  )
}

export default NavBar
