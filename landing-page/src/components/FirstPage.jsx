import React from 'react'
import NavBar from './NavBar';
import HeroText from './HeroText';
import { ArrowRight } from 'lucide-react';

const FirstPage = () => {
  return (
    <div className='h-9/10 w-full bg-white'>
        <NavBar/>
        <HeroText/>
      </div>
  )
}

export default FirstPage
