import React from 'react'
import screen from '../../../assets/Screen.svg'
import iphone from '../../../assets/Iphone.svg'
import Image from 'next/image'
import Partners from '../../_Components/Partners/page'

export default function page() {
  return (
    <div className='px-28 mt-20 max-lg:px-5'>
      <div className='max-lg:text-center mb-20 w-full'>
        <h1 className='font-semibold text-5xl'>Uğurlu layihələrimiz</h1>
      </div>
      <div className='grid grid-cols-2 items-center justify-between gap-10 max-lg:justify-center'>
        <div className='flex flex-col gap-4 '>
          <Image src={iphone} alt='screen' />
          <h1 className='font-semibold text-xl'>Lorem Ipsum</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Image src={iphone} alt='screen' />
          <h1 className='font-semibold text-xl'>Lorem Ipsum</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Image src={iphone} alt='screen' />
          <h1 className='font-semibold text-xl'>Lorem Ipsum</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita.</p>
        </div>
        <div className='flex flex-col gap-4'>
          <Image src={iphone} alt='screen' />
          <h1 className='font-semibold text-xl'>Lorem Ipsum</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita.</p>
        </div>
      </div>
      <div className='flex flex-col gap-20 mt-28'>
        <h1 className='font-semibold text-5xl mb-20'>Video...</h1>
        <div className='flex flex-row items-start text-end gap-20 max-lg:flex-col max-lg:text-center max-lg:items-center'>
          <Image src={screen} alt='screen' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet quas non adipisci cumque omnis inventore ipsam saepe nisi eos possimus incidunt, consequatur, commodi dolor nulla! Tempora iste vero libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit esse dicta a doloribus numquam facilis vero consequuntur veniam, hic deserunt cum illo dolorem accusamus porro dignissimos iure quae commodi praesentium.</p>
        </div>
        <div className='flex flex-row items-start text-start gap-20 max-lg:flex-col-reverse max-lg:text-center max-lg:items-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet quas non adipisci cumque omnis inventore ipsam saepe nisi eos possimus incidunt, consequatur, commodi dolor nulla! Tempora iste vero libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit esse dicta a doloribus numquam facilis vero consequuntur veniam, hic deserunt cum illo dolorem accusamus porro dignissimos iure quae commodi praesentium.</p>
          <Image src={screen} alt='screen' />
        </div>
      </div>
      <Partners />
    </div>
  )
}
