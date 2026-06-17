import React from 'react'
import { ArrowRight } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import FeatureHeading from './FeatureHeading';
import FeatureBtn from './FeatureBtn';
import Card from './Card';
import CardWrapper from './CardWrapper';

const FeaturePage = (props) => {

    return (
        <div className='h-fit w-full px-12 flex flex-col gap-4'>
            <FeatureHeading />
            <FeatureBtn />
            <CardWrapper furnitureData= {props.furnitureData}/>
        </div>
    )
}

export default FeaturePage
