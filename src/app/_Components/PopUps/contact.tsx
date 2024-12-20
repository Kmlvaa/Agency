import Image from 'next/image'
import React from 'react'
import insta from '../../../assets/insta.svg'
import facebook from '../../../assets/Group 3.svg'
import twitter from '../../../assets/Group 4.svg'
import youtube from '../../../assets/Group 5.svg'

export default function contact() {
    return (
        <div className='bg-foreground w-full left-0 top-20 h-auto p-20 absolute gap-10 rounded-b-3xl flex-col justify-between hidden group-hover:flex group-hover:visible z-10 transition ease delay-500'>
            <h1 className='text-Brown text-2xl font-bold'>Əlaqə</h1>
            <div className='flex flex-row justify-between items-start'>
                <div className='flex flex-col leading-7'>
                    <p>Fuad İbrahimbəyov 9b</p>
                    <p>(+994) 55 735 77 19</p>
                    <p>agency@aladdin.com</p>
                </div>
                <div className='flex flex-col leading-10 mr-40 w-[150px]'>
                    <p className='font-semibold'>BİZİ İZLƏYİN</p>
                    <div className='flex flex-row items-center justify-between'>
                        <Image src={insta} alt='social' width={30} height={30} />
                        <Image src={facebook} alt='social' width={30} height={30} />
                        <Image src={twitter} alt='social' width={30} height={30} />
                        <Image src={youtube} alt='social' width={30} height={30} />
                    </div>
                </div>
            </div>
            <div className='flex flex-row items-center justify-between border !border-gray-800 w-[500px] rounded-md'>
                <input placeholder='Email' className='p-2 bg-transparent' />
                <div className='py-2 px-5 bg-MainOrange text-white rounded-r-md'>Bizə qatıl</div>
            </div>
        </div>
    )
}
