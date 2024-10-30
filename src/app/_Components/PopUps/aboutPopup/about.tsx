import React from 'react'
import socialMedia from '../../../../assets/scmedia.png'
import Image from 'next/image'

export default function about() {
    return (
        <div className='AboutpopUp bg-foreground w-full h-auto p-20 absolute top-24 left-0 rounded-b-3xl flex flex-col z-10'>
            <h1 className='text-Brown text-2xl font-bold'>Haqqımızda</h1>
            <div className='flex flex-row items-center gap-60'>
                <div className='w-3/5'>
                    <p>     
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum. Dolor hic officia adipisci, quae rem at laboriosam harum placeat deserunt impedit nemo quia, exercitationem, soluta voluptate dignissimos maiores optio.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam, esse labore repellendus deserunt placeat quo illum corrupti quisquam sint! Nesciunt eaque, quibusdam accusamus perferendis optio nulla quae alias quod id.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ratione molestiae reprehenderit. Enim esse asperiores fugiat ad voluptatem? Aperiam facilis ex voluptates dolor consequuntur. Officiis, quas! Dolores at expedita magnam.
                    </p>
                </div>
                <div className='w-[400px] h-[400px]'>
                    <Image src={socialMedia} alt='social media image' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}
