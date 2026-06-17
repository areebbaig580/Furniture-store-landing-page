import React from 'react'
import { ArrowRight } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import NavBar from './components/NavBar';
import HeroText from './components/HeroText';
import FeaturePage from './components/FeaturePage';
import FirstPage from './components/FirstPage';



const App = () => {
  const furnitureData = [
  {
    id: 1,
    name: "Serene Haven Sofa",
    price: 899,
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc"
  },
  {
    id: 2,
    name: "Nordic Lounge Chair",
    price: 299,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 3,
    name: "Modern Coffee Table",
    price: 199,
    image: "https://images.unsplash.com/photo-1499933374294-4584851497cc"
  },
  {
    id: 4,
    name: "Elegant Dining Table",
    price: 649,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 5,
    name: "Luxury King Bed",
    price: 1299,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
  },
  {
    id: 6,
    name: "Classic Wooden Cabinet",
    price: 549,
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a"
  }
];

  return (
    <div className='h-screen w-100vw bg-white'>
      <FirstPage />
      <FeaturePage furnitureData={furnitureData} />
    </div>
  )
}

export default App
