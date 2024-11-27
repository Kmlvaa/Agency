import React from 'react'
import arrow from '../../../assets/Frame 193.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className='bg-DarkGray w-auto h-[350px] max-lg:h-[auto] mx-28 max-lg:mx-5 p-16 rounded-2xl flex flex-row items-center justify-center gap-10 my-20 max-lg:py-5 max-lg:gap-5
                    max-sm:grid max-sm:grid-cols-2'>
        <div className='bg-MainOrange rounded-2xl flex flex-col justify-evenly items-center p-3 h-full w-2/6 text-white max-lg:w-[200px] max-lg:h-[150px] max-sm:w-auto'>
            <div className='flex flex-row items-start justify-between gap-3'>
                <div className='flex flex-col justify-start'>
                    <p className='text-5xl max-sm:text-3xl m-0 max-sm:font-semibold font-extrabold'>50k+</p>
                    <p className='text-md max-md:text-sm'>Müştəri</p>
                </div>
                <div>
                    <Image alt='arrow' src={arrow} width={70} height={70}/>
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <p className='text-md max-lg:text-sm max-sm:text-[8px]'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div className='bg-background rounded-2xl flex flex-col items-center justify-evenly p-3 w-1/5 h-full max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>13+</h1>
            <p className='font-semibold text-gray-600'>Uğurlu layihə</p>
        </div>
        <div className='bg-background rounded-2xl p-3 w-1/5 h-full flex flex-col items-center justify-evenly max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>20</h1>
            <p className='font-semibold text-gray-600'>İşçi sayı</p>
        </div>
        <div className='bg-background rounded-2xl p-3 w-1/5 h-full flex flex-col items-center justify-evenly max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>10</h1>
            <p className='font-semibold text-gray-600'>İllik təcrübə</p>
        </div>
    </div>
  )
}
