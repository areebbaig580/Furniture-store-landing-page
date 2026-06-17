import React from 'react'
import { ShoppingCart } from 'lucide-react';

const Card = (elm) => {
    return (
        <div className='h-90 w-3/10 bg-gray-100 m-2.5 rounded-xl overflow-hidden'>
            <img className='h-8/10 w-full object-cover' src= {elm.img} alt="" />
            <div className='h-2/10 w-full flex justify-between items-center px-5'>
                <div className='flex flex-col items-start font-medium'>
                    <div>{elm.name}</div>
                    <div>$ {elm.price}</div>
                </div>
                <div className='h-9 w-9 rounded-full bg-white flex items-center justify-center'><ShoppingCart size={20} /></div>
            </div>
        </div>
    )
}

export default Card
