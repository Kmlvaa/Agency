import React from 'react'
import Statistics from '../../_Components/Statistics/page'
import Partnyors from '../../_Components/Partners/page'
import tel from '../../../assets/telephone.svg'
import map from '../../../assets/Map_light.svg'
import letter from '../../../assets/email.svg'
import Image from 'next/image'
import Frame from '../../../assets/Frame 168.png'

export default function page() {
    return (
        <div>
            <div className='px-32 flex flex-row items-start justify-between mt-20 max-md:!flex-col max-md:gap-5 max-[1200px]:px-5 max-sm:!flex-col'>
                <Image src={Frame} alt='frame' className='absolute -top-28 -left-20 z-10 -rotate-12' />
                <h1 className='text-8xl max-sm:text-6xl font-semibold m-auto mb-20'>Bizimlə əlaqə</h1>
                <div className='text-2xl max-md:bg-LoginFormGray rounded-xl w-full p-4'>
                    <div className='mb-14 flex flex-row gap-2 items-center'>
                        <Image src={map} alt='map light' />
                        <p>Fuad İbrahimbəyov 9B</p>
                    </div>
                    <div className='mb-14'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={letter} alt='email' />
                            <p className='mb-3 font-semibold'>Bizə birbaşa e-mail göndərin</p>
                        </div>
                        <p className='text-MainOrange text-xl'>office@aladdinmedia.org</p>
                    </div>
                    <div className='mb-14'>
                        <div className='flex flex-row items-center gap-2'>
                            <Image src={tel} alt='telephone' />
                            <p className='mb-3 font-semibold'>Bizə zəng edin</p>
                        </div>
                        <p className='text-MainOrange text-xl'>+(994)51 735 77 86</p>
                    </div>
                </div>
                <div className='max-md:!mx-5 w-full'>
                    <p className='text-MainOrange underline mb-2 font-semibold text-xl'>Xəritədə baxın</p>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2505.5875983060946!2d4.378383488787579!3d51.09761799881293!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f1d875ad3d69%3A0xbfcdadb0be749ef6!2sX-Academy!5e0!3m2!1sen!2saz!4v1728287176621!5m2!1sen!2saz" className='max-lg:!w-full w-[650px] h-[450px] rounded-xl' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Statistics />
            <Partnyors />
        </div>
    )
}
