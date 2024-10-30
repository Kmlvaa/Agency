import React from 'react'
import arrow from '../../../assets/Frame 193.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className='bg-DarkGray w-auto h-auto py-12 mx-16 max-lg:mx-5 px-10 rounded-2xl flex flex-row items-center justify-center gap-10 my-20 max-lg:py-5 max-lg:gap-5
                    max-sm:grid max-sm:grid-cols-2'>
        <div className='bg-MainOrange rounded-2xl flex flex-col justify-evenly items-center p-10 h-[200px] w-[300px] text-white max-lg:w-[200px] max-lg:h-[150px] max-sm:w-auto'>
            <div className='flex flex-row items-center justify-between gap-5'>
                <div>
                    <p className='text-5xl font-extrabold'>50k+</p>
                    <p className='text-xs'>Müştəri</p>
                </div>
                <div>
                    <Image alt='arrow' src={arrow} width={70} height={70}/>
                </div>
            </div>
            <div>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
        </div>
        <div className='bg-background rounded-2xl flex flex-col items-center justify-evenly p-10 w-[200px] h-[200px] max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>13+</h1>
            <p className='font-semibold text-gray-600'>Uğurlu layihə</p>
        </div>
        <div className='bg-background rounded-2xl p-10 w-[200px] h-[200px] flex flex-col items-center justify-evenly max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>20</h1>
            <p className='font-semibold text-gray-600'>İşçi sayı</p>
        </div>
        <div className='bg-background rounded-2xl p-10 w-[200px] h-[200px] flex flex-col items-center justify-evenly max-lg:w-[150px] max-lg:h-[150px] max-sm:w-auto'>
            <h1 className='text-5xl font-extrabold'>10</h1>
            <p className='font-semibold text-gray-600'>İl təcrübə</p>
        </div>
    </div>
  )
}
