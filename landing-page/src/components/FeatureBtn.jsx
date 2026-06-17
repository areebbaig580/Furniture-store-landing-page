import React from 'react'
import { ArrowRight } from 'lucide-react';

const FeatureBtn = () => {
    return (
        <div className='w-full h-15 flex justify-end items-center'>
            <div className='h-fit w-fit bg-white px-3 py-2 text-black rounded-xl flex gap-2 text-sm items-center border-2 border-black cursor-pointer font-semibold'>Shop now <ArrowRight size={16} /></div>
        </div>
    )
}

export default FeatureBtn
