import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';

const Collection = () => {
  const {products} = useContext(ShopContext);
  const [showFilters,setShowFilters]=useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter options */}
      <div className='min-w-60'>
        <p onClick={()=> setShowFilters(!showFilters)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img src={assets.dropdown_icon} className={`h-3 sm:hidden ${showFilters ? 'rotate-90' : ''}`} alt=""/>
        </p>
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilters ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-gray-600 font-light text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Men'} /> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Women'} /> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'Kids'} /> Kids
            </p>
          </div>
        </div>

        {/* Sub category filter */}
         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilters ? '' :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-gray-600 font-light text-sm'>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'TopWear'} /> TopWear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type='checkbox' value={'BottomWear'} /> BottomWear
            </p>
            <p className='flex gap-2'> 
              <input className='w-3' type='checkbox' value={'WinterWear'} /> WinterWear
            </p>
          </div>
        </div>

      </div>
      {/* Right Side */}
    </div>
  )
}

export default Collection 