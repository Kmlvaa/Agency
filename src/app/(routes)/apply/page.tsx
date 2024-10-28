import Image from 'next/image'
import React from 'react'
import about from '../../../assets/Frame 227.svg'
import plus from '../../../assets/Frame 228.svg'
import divider from '../../../assets/chevron-double-down.svg'
import Statistics from '../../_Components/Statistics/page'
import Partnyors from '../../_Components/Partners/page'

export default function apply() {
  return (
    <div className='py-20'>
      <div className='px-32 flex flex-row items-center justify-between gap-20'>
        <div className='flex flex-row relative'>
          <h1 className='text-9xl font-bold text-gray-700'>Müraciət et</h1>
          <Image src={plus} alt='plus sign image' className='absolute bottom-0 left-36' />
        </div>
        <div className=''>
          <Image src={about} alt='banner image' width={500} height={500} />
        </div>
      </div>

      <Image src={divider} alt='divider' className='w-20 h-20 mx-auto my-20' />

      <div className='px-28 flex flex-col gap-5'>
        <h1 className='text-4xl font-bold text-black'>Müraciət et</h1>
        <input placeholder='Maraqlanıram' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
        <div className='flex flex-row items-center gap-5'>
          <input placeholder='Adınız' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
          <input placeholder='Telefon nömrəsi' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
        </div>
        <input placeholder='Sorğunuz' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full h-[300px] px-5 py-3 rounded-3xl' />
        <button className='text-white bg-MainOrange py-3 px-5 m-auto rounded-lg'>Göndər</button>
      </div>

      <Statistics />
      <Partnyors />
      
    </div>
  )
}
