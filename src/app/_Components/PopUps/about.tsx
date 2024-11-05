import React from 'react'
import socialMedia from '../../../assets/scmedia.png'
import Image from 'next/image'

export default function about() {
    return (
        <div className='bg-foreground h-auto p-20 absolute w-full
                        left-0 top-20 rounded-b-3xl flex-col z-50 hidden group-hover:flex group-hover:visible transition ease delay-500'>
            <h1 className='text-Brown text-2xl font-bold'>Haqqımızda</h1>
            <div className='flex flex-row items-center gap-20 h-auto'>
                <div className='w-3/5'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum. Dolor hic officia adipisci, quae rem at laboriosam harum placeat deserunt impedit nemo quia, exercitationem, soluta voluptate dignissimos maiores optio.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, esse labore repellendus deserunt placeat quo illum corrupti quisquam sint! Nesciunt eaque, quibusdam accusamus perferendis optio nulla quae alias quod id.
                    </p>
                </div>
                <div className='h-[200px] w-2/5'>
                    <Image src={socialMedia} alt='social media image' className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    )
}
