import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col items-center gap-10 my-28 px-20'>
        <div className='flex flex-row items-center justify-center gap-3 text-gray-600'>
            <div className='w-96 h-px bg-gray-600'></div>
            <div>Partnyorlar</div>
            <div className='w-96 h-px bg-gray-600'></div>
        </div>
        <div className='flex flex-row items-center justify-between w-full'>
            <div className='text-DarkGray font-semibold text-5xl'>blum</div>
            <div className='text-DarkGray font-semibold text-5xl'>bakcell</div>
            <div className='text-DarkGray font-semibold text-5xl'>Green cup</div>
            <div className='text-DarkGray font-semibold text-5xl'>Cadde tantuni</div>
            <div className='text-DarkGray font-semibold text-5xl'>Beach club</div>
        </div>
    </div>
  )
}
