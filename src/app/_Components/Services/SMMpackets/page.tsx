import React from 'react'
import VideoIcon from '../../../../assets/Videographer-rafiki 1.svg'
import VideoIcon2 from '../../../../assets/Videographer-cuate 1.svg'
import VideoIcon3 from '../../../../assets/Videographer-pana 1.svg'
import Image from 'next/image'

export default function page() {
    return (
        <div className='my-10 m-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl mb-3'>SMM Paketlərimiz</h1>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur. Sollicitudin sed nisi suspendisse odio venenatis id in.</p>
            </div>
            <div className='flex flex-row items-center justify-center max-lg:flex-wrap gap-4 mt-32'>
                <div className='flex flex-col items-center justify-between h-[700px] max-lg:h-[600px] border border-gray-300 rounded-2xl p-4 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                    <Image src={VideoIcon} width={150} height={150} alt='econom' />
                    <p className='text-gray-700 font-bold text-3xl'>599 m</p>
                    <h1 className='font-bold text-4xl'>Biznes</h1>
                    <ol className='text-gray-800 my-4 pl-0'>
                        <li>1. 1 Influencer</li>
                        <li>2. 10 ədəd video çəkiliş</li>
                        <li>3. Kontent Menecer</li>
                        <li>4. Videoroliklərin hazırlanması</li>
                        <li>5. Marketinq strategiyasının hazırlanması</li>
                    </ol>
                    <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                </div>
                <div className='flex flex-col items-center justify-between h-[700px] max-lg:h-[600px] !border !border-MainOrange relative -top-20 max-lg:top-0 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                    <Image src={VideoIcon2} width={150} height={150} alt='econom' />
                    <p className='text-gray-700 font-bold text-3xl'>1100 m</p>
                    <h1 className='font-bold text-4xl'>Standart</h1>
                    <ol className='text-gray-800 my-4 pl-0'>
                        <li>1. 1 Influencer</li>
                        <li>2. 20 ədəd video çəkiliş</li>
                        <li>3. Kontent Menecer</li>
                        <li>4. Videoroliklərin hazırlanması</li>
                        <li>5. Marketinq strategiyasının hazırlanması</li>
                        <li>6. Brendin inkişaf etdirilməsi</li>
                    </ol>
                    <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                </div>
                <div className='flex flex-col items-center justify-between h-[700px] max-lg:h-[600px] !border !border-MainOrange relative -top-20 max-lg:top-0 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                    <Image src={VideoIcon3} width={150} height={150} alt='econom' />
                    <p className='text-gray-700 font-bold text-3xl'>1600 m</p>
                    <h1 className='font-bold text-4xl'>Ekstra</h1>
                    <ol className='text-gray-800 my-4 pl-0'>
                        <li>1. 1 Influencer</li>
                        <li>2. 20 ədəd video çəkiliş</li>
                        <li>3. Kontent Menecer</li>
                        <li>4. Videoroliklərin hazırlanması</li>
                        <li>5. Marketinq strategiyasının hazırlanması</li>
                        <li>6. Brendin inkişaf etdirilməsi</li>
                    </ol>
                    <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                </div>
                <div className='flex flex-col items-center justify-between h-[700px] max-lg:h-[600px] border border-gray-300 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                    <Image src={VideoIcon} width={150} height={150} alt='econom' />
                    <p className='text-gray-700 font-bold text-3xl'>1800 m</p>
                    <h1 className='font-bold text-4xl'>Platinium</h1>
                    <ol className='text-gray-800 my-4 pl-0'>
                        <li>1. 1 Influencer</li>
                        <li>2. 10 ədəd video çəkiliş</li>
                        <li>3. Kontent Menecer</li>
                        <li>4. Videoroliklərin hazırlanması</li>
                        <li>5. Marketinq strategiyasının hazırlanması</li>
                        <li>6. Brendin inkişaf etdirilməsi</li>
                        <li>7. Şirkətdaxili marketinq təlimi</li>
                    </ol>
                    <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                </div>
            </div>
        </div>
    )
}
