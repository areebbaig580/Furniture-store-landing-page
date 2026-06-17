import React from 'react'
import { ShoppingCart } from 'lucide-react';
import Card from './Card';

const CardWrapper = (props) => {
    console.log(props)
  return (
    <div className="h-fit w-full flex flex-wrap justify-center items-center">
      {props.furnitureData.map((item) => (
        <Card
          key={item.id}
          img={item.image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default CardWrapper
