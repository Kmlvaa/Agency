'use client'
import React from 'react'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'
import Icon from '../../../assets/lilicon.png'
import VideoIcon from '../../../assets/Videographer-rafiki 1.svg'
import VideoIcon2 from '../../../assets/Videographer-cuate 1.svg'
import VideoIcon3 from '../../../assets/Videographer-pana 1.svg'
import Image from 'next/image'
import Modal from '../../_Components/Modals/modal'

export default function page() {

    const [modalShow, setModalShow] = React.useState(false);

    return (
        <div className=''>
            <div className='flex flex-col items-start px-28 my-28'>
                <h1 className='font-bold text-5xl mb-20'>Xidmətlərimiz</h1>
                <div className='grid grid-cols-3 items-center gap-10'>
                    {cards?.map((card) => {
                        return (
                            <div key={card.id} className='card bg-foreground border border-gray-200 rounded-2xl flex flex-col items-start px-5 py-8 shadow-[inset_0px_-1px_19px_0px_rgba(0,_0,_0,_0.1)]'>
                                <div className='bg-white rounded-full w-16 h-16 p-3 mb-3'>
                                    <Image src={Icon} alt='icon' />
                                </div>
                                <h1 className='font-semibold text-2xl my-5'>{card.name}</h1>
                                <p className='text-gray-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit officiis.adipisicing elit. Velit officiis.</p>
                                <div className='flex flex-row gap-2 items-center text-gray-800 mt-10 cursor-pointer hover:text-MainOrange'>
                                    <p onClick={() => setModalShow(true)}>Daha çox</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                    <Modal show={modalShow}/>
                </div>
                <div className='my-20 m-auto'>
                    <div className='text-center'>
                        <h1 className='font-bold text-5xl mb-3'>“VİM” Paketlərimiz</h1>
                        <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur. Sollicitudin sed nisi suspendisse odio venenatis id in.</p>
                    </div>
                    <div className='flex flex-row gap-5 mt-32'>
                        <div className='card flex flex-col items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>599 m</p>
                            <h1 className='font-bold text-4xl'>Econom</h1>
                            <ol className='text-gray-800 my-5'>
                                <li>1. 1 Influencer</li>
                                <li>2. 10 ədəd video çəkiliş</li>
                                <li>3. Kontent Menecer</li>
                                <li>4. Videoroliklərin hazırlanması</li>
                                <li>5. Marketinq strategiyasının hazırlanması</li>
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                        <div className='card flex flex-col items-center justify-between border border-MainOrange relative -top-20 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon2} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>1100 m</p>
                            <h1 className='font-bold text-4xl'>Standart</h1>
                            <ol className='text-gray-800 my-5'>
                                <li>1. 1 Influencer</li>
                                <li>2. 20 ədəd video çəkiliş</li>
                                <li>3. Kontent Menecer</li>
                                <li>4. Videoroliklərin hazırlanması</li>
                                <li>5. Marketinq strategiyasının hazırlanması</li>
                                <li>6. Brendin inkişaf etdirilməsi</li>
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                        <div className='card flex flex-col items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon3} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>1600 m</p>
                            <h1 className='font-bold text-4xl'>Premium</h1>
                            <ol className='text-gray-800 my-5'>
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
                <div className='my-20 m-auto'>
                    <div className='text-center'>
                        <h1 className='font-bold text-5xl mb-3'>SMM Paketlərimiz</h1>
                        <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur. Sollicitudin sed nisi suspendisse odio venenatis id in.</p>
                    </div>
                    <div className='flex flex-row gap-5 mt-32'>
                        <div className='card flex flex-col items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>599 m</p>
                            <h1 className='font-bold text-4xl'>Biznes</h1>
                            <ol className='text-gray-800 my-5'>
                                <li>1. 1 Influencer</li>
                                <li>2. 10 ədəd video çəkiliş</li>
                                <li>3. Kontent Menecer</li>
                                <li>4. Videoroliklərin hazırlanması</li>
                                <li>5. Marketinq strategiyasının hazırlanması</li>
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                        <div className='card flex flex-col items-center justify-between border border-MainOrange relative -top-20 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon2} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>1100 m</p>
                            <h1 className='font-bold text-4xl'>Standart</h1>
                            <ol className='text-gray-800 my-5'>
                                <li>1. 1 Influencer</li>
                                <li>2. 20 ədəd video çəkiliş</li>
                                <li>3. Kontent Menecer</li>
                                <li>4. Videoroliklərin hazırlanması</li>
                                <li>5. Marketinq strategiyasının hazırlanması</li>
                                <li>6. Brendin inkişaf etdirilməsi</li>
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                        <div className='card flex flex-col items-center justify-between border border-MainOrange relative -top-20 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon3} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>1600 m</p>
                            <h1 className='font-bold text-4xl'>Ekstra</h1>
                            <ol className='text-gray-800 my-5'>
                                <li>1. 1 Influencer</li>
                                <li>2. 20 ədəd video çəkiliş</li>
                                <li>3. Kontent Menecer</li>
                                <li>4. Videoroliklərin hazırlanması</li>
                                <li>5. Marketinq strategiyasının hazırlanması</li>
                                <li>6. Brendin inkişaf etdirilməsi</li>
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                        <div className='card flex flex-col items-center justify-between border border-gray-300 rounded-2xl p-6 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <Image src={VideoIcon} width={150} height={150} alt='econom' />
                            <p className='text-gray-700 font-bold text-3xl'>1800 m</p>
                            <h1 className='font-bold text-4xl'>Platinium</h1>
                            <ol className='text-gray-800 my-5'>
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
            </div>
            <Statistics />
            <Partners />
        </div>
    )
}

const cards = [
    {
        id: 1,
        name: 'Mobiloqrafiya'
    },
    {
        id: 2,
        name: 'SMM'
    },
    {
        id: 3,
        name: 'Qrafik Dizayn'
    },
    {
        id: 4,
        name: 'Seo Services'
    },
    {
        id: 5,
        name: 'Digital Merketing'
    },
    {
        id: 6,
        name: 'Influencer'
    },
]