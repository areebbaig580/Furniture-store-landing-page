import React from 'react'
import { ArrowRight } from 'lucide-react';
const HeroText = () => {
  return (
    <div className='h-8/10 w-full flex flex-col justify-center px-12 gap-8'>
          <div className='text-8xl leading-tight'>Transforming your home <br />In timeless style</div>
          <div className='text-gray-600'>
            Discover beautifully crafted furniture designed to transform your home into a sanctuary of comfort and style. <br />
            From timeless classics to modern trends, our curated collections bring quality, elegance, and inspiration to every space.
          </div>
          <div className='flex gap-3'>
            <div className='h-fit w-fit bg-black px-4 py-3 text-white rounded-xl flex gap-2 text-sm items-center cursor-pointer'>Shop now <ArrowRight size={16} /></div>
            <div className='h-fit w-fit bg-white px-4 py-3 text-black rounded-xl flex gap-2 text-sm items-center border-2 border-black cursor-pointer'>Explore Collection <ArrowRight size={16} /></div>
          </div>
        </div>
  )
}

export default HeroText
