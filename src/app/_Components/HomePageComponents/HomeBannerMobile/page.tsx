import React from 'react'
import Light from '../../../../assets/image.svg'
import Image from 'next/image'

export default function page() {
  return (
    <div className='px-5'>
      <div className='w-full h-[300px] bg-MainOrange rounded-3xl hidden max-sm:flex flex-row items-center justify-between'>
        <div className='text-white px-5'>
          <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga dolores modi placeat nihil maiores optio ullam quisquam possimus hic, autem qui deleniti et nemo eligendi, aliquid facilis earum odit praesentium?</p>
          <button className='border border-white px-4 py-1 rounded-lg mt-10 hover:bg-white hover:text-MainOrange'>Müraciət et</button>
        </div>
        <div>
          <Image src={Light} alt='light banner image' />
        </div>
      </div>
    </div>
  )
}
