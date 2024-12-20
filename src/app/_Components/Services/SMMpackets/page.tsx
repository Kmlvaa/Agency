import React from 'react'
import VideoIcon from '../../../../assets/Videographer-rafiki 1.svg'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Autoplay } from 'swiper/modules'

export default function page() {
    return (
        <div className='my-10 m-auto'>
            <div className='text-center'>
                <h1 className='font-bold text-5xl mb-3'>SMM Paketlərimiz</h1>
                <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur. Sollicitudin sed nisi suspendisse odio venenatis id in.</p>
            </div>
            <div className='flex flex-row items-center justify-center max-lg:flex-wrap gap-4 mt-32 max-sm:!hidden'>
                {services?.map((service) => {
                    return (
                        <div className='flex flex-col items-start justify-between h-[700px] max-lg:h-[600px] border border-gray-300 rounded-2xl p-4 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)] [&:nth-child(2)]:!border-MainOrange [&:nth-child(3)]:!border-MainOrange'>
                            <Image src={VideoIcon} width={150} height={150} alt='econom' />
                            <div>
                                <p className='text-gray-700 font-bold text-3xl'>{service.price} m</p>
                                <h1 className='font-bold text-4xl'>{service.title}</h1>
                            </div>
                            <ol className='text-gray-800 my-4 pl-0 text-start'>
                                {service.description.map((item) => {
                                    return (
                                        <li>{item.li}</li>
                                    );
                                })}
                            </ol>
                            <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                        </div>
                    );
                })}
            </div>
            <div className='!hidden max-sm:!flex flex-row !items-center text-center justify-center text-xl w-screen overflow-hidden max-w-[400px]'>
                <Swiper
                    slidesPerView={1}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    loop
                    grabCursor={true}
                    modules={[Autoplay]}
                    className='flex items-center justify-center'

                >
                    {services?.map((service) => {
                        return (
                            <SwiperSlide key={service.id}>
                                <div className='flex flex-col items-center justify-between h-[700px] max-lg:h-[600px] border border-gray-300 rounded-2xl p-4 shadow-[-1px_5px_8px_0px_rgba(0,_0,_0,_0.1)] [&:nth-child(2)]:!border-MainOrange [&:nth-child(3)]:!border-MainOrange'>
                                    <Image src={VideoIcon} width={150} height={150} alt='econom' />
                                    <div>
                                        <p className='text-gray-700 font-bold text-3xl'>{service.price} m</p>
                                        <h1 className='font-bold text-4xl'>{service.title}</h1>
                                    </div>
                                    <ol className='text-gray-800 my-4 ml-5 pl-0 text-start'>
                                        {service.description.map((item) => {
                                            return (
                                                <li>{item.li}</li>
                                            );
                                        })}
                                    </ol>
                                    <button className='border-2 border-MainOrange px-3 py-1 font-semibold rounded-md text-MainOrange hover:text-white hover:bg-MainOrange'>İndi al</button>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

const services = [
    {
        id: 1,
        title: 'Biznes',
        price: '599',
        description: [
            {
                li: "1. 1 Influencer",
            },
            {
                li: "2. 10 ədəd video çəkiliş",
            },
            {
                li: "3. Kontent Menecer",
            },
            {
                li: "4. Videoroliklərin hazırlanması",
            },
            {
                li: "5. Marketinq strategiyasının hazırlanması",
            },
        ],
        image: 'VIdeoIcon'
    },
    {
        id: 2,
        title: 'Standart',
        price: '1100',
        description: [
            {
                li: "1. 1 Influencer",
            },
            {
                li: "2. 10 ədəd video çəkiliş",
            },
            {
                li: "3. Kontent Menecer",
            },
            {
                li: "4. Videoroliklərin hazırlanması",
            },
            {
                li: "5. Marketinq strategiyasının hazırlanması",
            },
            {
                li: "6. Brendin inkişaf etdirilməsi",
            },
        ],
        image: 'VIdeoIcon'
    },
    {
        id: 3,
        title: 'Ekstra',
        price: '1600',
        description: [
            {
                li: "1. 1 Influencer",
            },
            {
                li: "2. 10 ədəd video çəkiliş",
            },
            {
                li: "3. Kontent Menecer",
            },
            {
                li: "4. Videoroliklərin hazırlanması",
            },
            {
                li: "5. Marketinq strategiyasının hazırlanması",
            },
            {
                li: "6. Brendin inkişaf etdirilməsi",
            },
        ],
        image: 'VIdeoIcon'
    },
    {
        id: 3,
        title: 'Platinium',
        price: '1800',
        description: [
            {
                li: "1. 1 Influencer",
            },
            {
                li: "2. 10 ədəd video çəkiliş",
            },
            {
                li: "3. Kontent Menecer",
            },
            {
                li: "4. Videoroliklərin hazırlanması",
            },
            {
                li: "5. Marketinq strategiyasının hazırlanması",
            },
            {
                li: "6. Brendin inkişaf etdirilməsi",
            },
            {
                li: "7. Şirkətdaxili marketinq təlimi",
            },
        ],
        image: 'VIdeoIcon'
    },
]