import React from 'react'
import arrow from '../../../assets/Frame 193.png'
import Image from 'next/image'

export default function page() {
  return (
    <div className='bg-DarkGray w-auto h-96 mx-16 rounded-2xl flex flex-row items-center justify-center gap-10 my-20'>
        <div className='bg-MainOrange rounded-2xl flex flex-col justify-evenly items-center h-60 w-80 text-white'>
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
        <div className='bg-background rounded-2xl flex flex-col items-center justify-evenly w-60 h-60'>
            <h1 className='text-5xl font-extrabold'>13+</h1>
            <p className='font-semibold text-gray-600'>Uğurlu layihə</p>
        </div>
        <div className='bg-background rounded-2xl w-60 h-60 flex flex-col items-center justify-evenly'>
            <h1 className='text-5xl font-extrabold'>20</h1>
            <p className='font-semibold text-gray-600'>İşçi sayı</p>
        </div>
        <div className='bg-background rounded-2xl w-60 h-60 flex flex-col items-center justify-evenly'>
            <h1 className='text-5xl font-extrabold'>10</h1>
            <p className='font-semibold text-gray-600'>İl təcrübə</p>
        </div>
    </div>
  )
}
