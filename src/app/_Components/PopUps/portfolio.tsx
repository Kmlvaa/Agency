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
                    spaceBetween={50}
                    slidesPerView={3}
                    grabCursor={true}
                    autoplay={{
                        delay: 2000,
                    }}
                    loop
                >
                    <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                    <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                    <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                    <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}
