import React from 'react'
import Screen from '../../../assets/popUpScreen.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';

export default function portfolio() {
    return (
        <div id='portfolioPopup' className='bg-foreground p-20 absolute w-full left-0 top-20 h-auto rounded-b-3xl flex-col hidden group-hover:flex group-hover:visible z-10 transition ease delay-500'>
            <h1 className='text-Brown text-2xl font-bold mb-10'>Portfoliomuz</h1>
            <div>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={40}
                    slidesPerView={3}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    loop
                >
                    {portfolios?.map((portfolio) => {
                        return (
                            <SwiperSlide key={portfolio.id}>
                                <div className='w-[400px] h-[250px] rounded-lg border-8 border-solid border-black max-xl:w-full max-xl:h-[200px] max-lg:h-[150px]'>
                                    <Image src={portfolio.imageUrl} alt='portfolio' width={400} height={300} className='w-full h-full cover rounded-xl' />
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    )
}

const portfolios = [
    {
        id: 1,
        imageUrl: '/images/brend.webp',
        link: '/portfolio'
    },
    {
        id: 2,
        imageUrl: '/images/musteri.jpg',
        link: '/portfolio'
    },
    {
        id: 3,
        imageUrl: '/images/shop.jpg',
        link: '/portfolio'
    },
    {
        id: 4,
        imageUrl: '/images/helth.avif',
        link: '/portfolio'
    },
]