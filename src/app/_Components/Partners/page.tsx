import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center gap-10 my-28 px-16 max-lg:px-5'>
        <div className='flex flex-row items-center justify-center gap-3 text-gray-600'>
            <div className='w-96 h-px bg-gray-600'></div>
            <div>Partnyorlar</div>
            <div className='w-96 h-px bg-gray-600'></div>
        </div>
        <div className='flex flex-row items-center justify-between w-full'>
            <div className='text-DarkGray font-semibold text-5xl w-[150px]'><p>blum</p></div>
            <div className='text-DarkGray font-semibold text-5xl w-[150px]'><p>bakcell</p></div>
            <div className='text-DarkGray font-semibold text-5xl w-[150px]'><p>Green cup</p></div>
            <div className='text-DarkGray font-semibold text-5xl w-[150px]'><p>Cadde tantuni</p></div>
            <div className='text-DarkGray font-semibold text-5xl w-[150px]'><p>Beach club</p></div>
        </div>
    </div>
  )
}
