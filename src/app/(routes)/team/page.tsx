import React from 'react'
import Frame from '../../../assets/Frame 168.png'
import Image from 'next/image'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'
import teamImage from '../../../assets/team.png'

export default function () {
  return (
    <div className='max-md:bg-background'>
        <Image src={Frame} alt='frame' className='absolute -top-16 left-0 z-10'/>
        <div className='flex flex-col items-center gap-20'>
            <h1 className='font-bold text-5xl my-20 max-sm:text-3xl'>Komandamızla tanış olun</h1>
            <div className='flex flex-wrap items-center justify-center gap-20'>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Image src={teamImage} alt='team' className='w-60 h-60 rounded-full'/>
                    <p className='font-bold text-xl'>Lorem Ipsum</p>
                    <p>Dizayner</p>
                </div>
            </div>
        </div>
        <Statistics />
        <Partners />
    </div>
  )
}
