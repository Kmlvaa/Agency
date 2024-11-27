'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import { Autoplay } from 'swiper/modules'


export default function page() {
  return (
    <div className='flex flex-col items-center gap-10 py-14 mx-16'>
      <div className='flex flex-row items-center justify-center gap-3 text-gray-600 w-full mx-20'>
        <div className='w-full h-px bg-gray-600 '></div>
        <div>Partnyorlar</div>
        <div className='w-full h-px bg-gray-600'></div>
      </div>
      <div className='flex flex-row items-center text-center justify-between text-5xl w-full max-lg:text-3xl px-16 max-lg:px-5 max-md:!hidden'>
        {partners?.map((partner) => {
          return (
            <div className='text-DarkGray font-semibold w-[130px]' key={partner.id}><p>{partner.name}</p></div>
          );
        })}
      </div>
      <div className='hidden max-md:!flex flex-row items-center text-center justify-between text-xl w-full'>
        <Swiper
          slidesPerView={3}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          pagination={true}
          grabCursor={true}
          loop
          modules={[ Autoplay]}

        >
          {partners?.map((partner) => {
            return (
              <SwiperSlide key={partner.id}>{partner.name}</SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

interface Partners {
  id: number;
  name: string;
}

let partners: Partners[] = [
  {
    id: 1,
    name: "blum",
  },
  {
    id: 2,
    name: "bakcell",
  },
  {
    id: 3,
    name: "Green cup",
  },
  {
    id: 4,
    name: "Cadde tantuni",
  },
  {
    id: 5,
    name: "Beach club",
  },
]