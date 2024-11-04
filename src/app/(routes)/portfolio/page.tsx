import React from 'react'
import screen from '../../../assets/Screen.svg'
import iphone from '../../../assets/Iphone.svg'
import Image from 'next/image'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'

export default function page() {
  return (
    <div className='px-28 pt-20 max-lg:px-5 max-md:bg-background'>
      <div className='max-lg:text-center mb-20 w-full'>
        <h1 className='font-semibold text-5xl'>Uğurlu layihələrimiz</h1>
      </div>
      <div className='grid grid-cols-2 items-center justify-between gap-10 max-lg:justify-center max-md:grid-cols-1'>
        {data?.map((x) => {
          return (
            <div className='flex flex-col gap-4 w-auto max-md:items-center' key={x.id}>
              <Image src={iphone} alt='screen' />
              <h1 className='font-semibold text-xl'>{x.title}</h1>
              <p>{x.desk}</p>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-10 mt-28'>
        <h1 className='font-semibold text-5xl mb-10'>Video...</h1>
        <div className='flex items-center text-end gap-10 max-sm:flex-col max-sm:!text-center '>
          <Image src={screen} alt='screen' className='w-1/2 max-sm:w-full'/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet quas non adipisci cumque omnis inventore ipsam saepe nisi eos possimus incidunt, consequatur, commodi dolor nulla! Tempora iste vero libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit esse dicta a doloribus numquam facilis vero consequuntur veniam, hic deserunt cum illo dolorem accusamus porro dignissimos iure quae commodi praesentium.</p>
        </div>
        <div className='flex items-center text-start gap-10 max-sm:flex-col-reverse max-sm:text-center'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet quas non adipisci cumque omnis inventore ipsam saepe nisi eos possimus incidunt, consequatur, commodi dolor nulla! Tempora iste vero libero! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit esse dicta a doloribus numquam facilis vero consequuntur veniam, hic deserunt cum illo dolorem accusamus porro dignissimos iure quae commodi praesentium.</p>
          <Image src={screen} alt='screen' className='w-1/2 max-sm:w-full'/>
        </div>
      </div>
      <Statistics />
      <Partners />
    </div>
  )
}

interface Data {
  id: number;
  title: string;
  desk: string;
}

let data: Data[] = [
  {
    id: 1,
    title: "Lorem Ipsum",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita."
  },
  {
    id: 2,
    title: "Lorem Ipsum",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita."
  },
  {
    id: 3,
    title: "Lorem Ipsum",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita."
  },
  {
    id: 4,
    title: "Lorem Ipsum",
    desk: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum veritatis nam voluptatum consequatur repudiandae iste quisquam soluta aperiam deleniti amet nobis, incidunt maxime dolor ab aliquid deserunt, sit dicta expedita."
  },
];
