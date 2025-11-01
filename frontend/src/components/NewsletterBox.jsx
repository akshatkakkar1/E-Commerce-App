import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
        <p className='text-gray-400 mt-3'>
            Sign up for our newsletter to receive the latest updates and exclusive offers.
        </p>
        <form>
            <input type="email" placeholder='Enter your email' className='w-full sm:flex-1 outline-none' required />
            <button className='bg-black text-white text-xs px-10 py-4' type='submit'>SUBSCRIBE</button>
        </form>
    </div>
  )
}

export default NewsletterBox