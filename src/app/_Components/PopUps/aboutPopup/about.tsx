import React from 'react'
import socialMedia from '../../../../assets/scmedia.png'
import Image from 'next/image'
import './aboutPopup.css'

export default function about() {
    return (
        <div className='AboutpopUp bg-foreground w-full h-auto p-20 absolute top-24 left-0 rounded-b-3xl flex-row items-center z-10 pointer-events-none'>
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dolorum. Dolor hic officia adipisci, quae rem at laboriosam harum placeat deserunt impedit nemo quia, exercitationem, soluta voluptate dignissimos maiores optio.</div>
            <div>
                <Image src={socialMedia} alt='social media image' width={800} height={800} />
            </div>
        </div>
    )
}
