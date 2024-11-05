import Image from 'next/image'
import React from 'react'
import about from '../../../assets/Frame 227.svg'
import mobilBanner from '../../../assets/Frame 261.svg'
import plus from '../../../assets/Frame 228.svg'
import divider from '../../../assets/chevron-double-down.svg'
import Statistics from '../../_Components/Statistics/page'
import Partnyors from '../../_Components/Partners/page'

export default function apply() {
  return (
    <div className='max-md:bg-background'>
      <div className='px-28 flex items-center justify-between gap-20 max-sm:gap-0 max-lg:px-5 max-sm:flex-col max-sm:items-start'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-gray-700 text-8xl max-lg:!text-7xl max-sm:!text-5xl'>Müraciət</h1>
          <div className='flex flex-row gap-3 items-center'>
            <h1 className='font-bold text-gray-700 text-8xl max-lg:!text-7xl max-sm:!text-5xl'>et</h1>
            <Image src={plus} alt='plus sign image' className='w-[80px] h-[80px] max-sm:w-[60px] max-sm:h-[60px]' />
          </div>
        </div>
        <div className='h-[400px] max-sm:!h-[500px] w-1/2 max-sm:w-full overflow-hidden max-sm:relative'>
          <Image src={about} alt='banner image' className='w-full h-full max-lg:!hidden' />
          <Image src={mobilBanner} alt='banner image' className='w-full h-full hidden max-lg:flex max-sm:absolute top-0 left-10' />  
        </div>
      </div>

      <Image src={divider} alt='divider' className='w-20 h-20 mx-auto my-20' />

      <div className='px-28 flex flex-col gap-3 max-lg:px-5'>
        <h1 className='text-4xl font-bold text-black'>Müraciət et</h1>
        <input placeholder='Maraqlanıram' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
        <div className='flex items-center gap-3 max-sm:!flex-col'>
          <input placeholder='Adınız' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
          <input placeholder='Telefon nömrəsi' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full px-5 py-3 rounded-full' />
        </div>
        <input placeholder='Sorğunuz' className='bg-gray-300 placeholder:font-semibold placeholder:text-black w-full h-[300px] max-sm:h-[200px] px-5 py-3 rounded-3xl' />
        <button className='text-white bg-MainOrange py-3 px-5 m-auto rounded-lg max-sm:!px-2'>Göndər</button>
      </div>

      <Statistics />
      <Partnyors />
      
    </div>
  )
}
