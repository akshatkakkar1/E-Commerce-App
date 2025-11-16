import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsletterBox from '../components/NewsletterBox';

const About = () => {
  return (
    <div>

      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam illo exercitationem in incidunt ut! Ea, nisi maxime commodi quaerat aspernatur praesentium laudantium tenetur provident magnam accusamus, expedita rerum ut sint.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam inventore praesentium a aspernatur asperiores voluptatum corrupti? Unde nihil voluptatibus vitae magnam adipisci veritatis ipsa atque, at quaerat aliquid eum officia!
          Error quos modi, dolor, magni doloremque, eos consequatur impedit quas eaque sed quo adipisci nisi. Nihil, totam. Quas sint magni est, sed deleniti optio vero eligendi! Illum laborum amet aliquam.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission is to provide quality products and exceptional service to our customers.</p>
        </div>
      </div>

      <div className='text-xl py-4 '>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Quality Assurance:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa illo ipsum sapiente esse architecto excepturi, ipsam magnam blanditiis saepe itaque alias at, totam possimus porro? Earum dolore quas necessitatibus.
        Tempora quibusdam, sed aut quaerat nobis, debitis architecto repellat ratione ullam minima iusto eveniet cum minus hic nam natus accusantium, officiis earum quod aliquid omnis explicabo et. Error, minima voluptate?
        Incidunt, repellendus! Veniam velit, voluptatum hic at maxime dolorum obcaecati voluptatem non iste accusamus voluptate consequatur, quasi sint quos optio asperiores inventore fugit rem nisi expedita? Sed officiis qui nam!</p>
        </div>


    <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Convenience:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam minima officia quos consequatur quis, unde iusto consequuntur totam ipsa nobis eius inventore. Voluptate amet expedita nostrum ullam libero a.
        Illum libero fuga dolor eum est nobis pariatur totam quas! Ad consequuntur blanditiis sapiente perferendis modi temporibus incidunt neque reiciendis sint, dicta inventore, commodi molestiae ratione fugiat deleniti? Explicabo, libero.</p>
    </div>
    
     <div className=' border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 '>
        <b>Exceptional customer service:</b>
        <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa illo ipsum sapiente esse architecto excepturi, ipsam magnam blanditiis saepe itaque alias at, totam possimus porro? Earum dolore quas necessitatibus.
        Tempora quibusdam, sed aut quaerat nobis, debitis architecto repellat ratione ullam minima iusto eveniet cum minus hic nam natus accusantium, officiis earum quod aliquid omnis explicabo et. Error, minima voluptate?
        Incidunt, repellendus! Veniam velit, voluptatum hic at maxime dolorum obcaecati voluptatem non iste accusamus voluptate consequatur, quasi sint quos optio asperiores inventore fugit rem nisi expedita? Sed officiis qui nam!</p>
        </div>

      </div>


      <NewsletterBox />
    </div>
  )
}

export default About