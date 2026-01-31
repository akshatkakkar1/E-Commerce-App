import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <footer className='my-10 mt-40 text-sm'>
            <div className='grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>Your trusted source for the latest trends in fashion and lifestyle.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>
                        Company
                    </p>
                    <ul className='flex flex-col text-gray-600 gap-1 '>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col text-gray-600 gap-1 '>
                        <li>+1-121-232-5689</li>
                        <li>info@example.com</li>
                    </ul>
                </div>
            </div>

           
            <div className='mt-8'>
                <hr className='border-t border-gray-200' />
                <p className='py-5 text-sm text-center'>&copy; 2025 Ecommerce. All rights reserved.</p>
            </div>
            <h1 className='flex items-center justify-center'>Made with <span className='text-red-600'>&#9829;</span> By Akshat</h1>
        </footer>
    )
}
 
export default Footer