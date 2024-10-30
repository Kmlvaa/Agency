import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center gap-10 my-28'>
        <div className='flex flex-row items-center justify-center gap-3 text-gray-600 px-16 max-lg:px-5'>
            <div className='w-[150px] h-px bg-gray-600'></div>
            <div>Partnyorlar</div>
            <div className='w-[150px] h-px bg-gray-600'></div>
        </div>
        <div className='flex flex-row items-center text-center justify-between text-5xl w-full max-lg:text-3xl'>
            <div className='text-DarkGray font-semibold w-[130px]'><p>blum</p></div>
            <div className='text-DarkGray font-semibold w-[130px]'><p>bakcell</p></div>
            <div className='text-DarkGray font-semibold w-[130px]'><p>Green cup</p></div>
            <div className='text-DarkGray font-semibold w-[130px]'><p>Cadde tantuni</p></div>
            <div className='text-DarkGray font-semibold w-[130px]'><p>Beach club</p></div>
        </div>
    </div>
  )
}
