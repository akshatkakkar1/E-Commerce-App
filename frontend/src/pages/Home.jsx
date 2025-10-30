import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import BestSeller from '../components/BestSeller'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <h1 className='flex items-center justify-center'>Made By <span className='text-red-600'>&#9829;</span> with Akshat</h1>
    </div>
  )
}

export default Home