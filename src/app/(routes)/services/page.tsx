'use client'
import React, { useState } from 'react'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'
import Icon from '../../../assets/lilicon.png'
import Image from 'next/image'
import Modal from '../../_Components/Modals/modal'
import VIMpackets from '../../_Components/Services/VIMpackets/page'
import SMMpacket from '../../_Components/Services/SMMpackets/page'

export default function page() {

    const [modalShow, setModalShow] = useState(false);
    const [modalData, setModalData] = useState({name: '', about: '', image: ''});

    const handleModal = (data) => {
        setModalShow(true);
        setModalData(data);
    }

    return (
        <div className='max-md:bg-background'>
            <div className='flex flex-col items-start px-28 gap-10 pt-20 max-lg:px-5 max-sm:items-center'>
                <h1 className='font-bold text-5xl mb-20'>Xidmətlərimiz</h1>
                <div className='grid grid-cols-3 items-center gap-3 max-sm:!grid-cols-1 max-md:!grid-cols-2'>
                    {cards?.map((card) => {
                        return (
                            <div key={card.id} className='group h-[550px] max-sm:h-auto relative bg-foreground border border-gray-200 rounded-2xl flex flex-col gap-5 max-sm:items-center max-sm:flex-row items-start px-5 max-sm:px-2 py-8 shadow-[inset_0px_-1px_19px_0px_rgba(0,_0,_0,_0.1)] hover:bg-MainOrange hover:text-white'
                                onClick={() => {handleModal(card)}}>
                                <div className='bg-white rounded-full !w-16 !h-16 p-3 mb-2 max-sm:p-1'>
                                    <Image src={Icon} alt='icon' className='w-full h-full object-contain' />
                                </div>
                                <div className='w-auto'>
                                    <h1 className='font-semibold text-2xl my-3'>{card.name}</h1>
                                    <p className='text-gray-700 group-hover:text-white'>{card.about}</p>
                                </div>
                                <div className='flex flex-row gap-2 text-center items-center text-gray-800 mt-8 cursor-pointer group-hover:text-white max-sm:!hidden absolute bottom-5'>
                                    <p className='mb-0' onClick={() => setModalShow(true)}>Daha çox</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </div>
                            </div>
                        );
                    })}
                    {modalShow && <Modal show={modalShow} onHide={() => setModalShow(false)} name={modalData.name} about={modalData.about} image={modalData.image}/>}
                </div>
                <VIMpackets />
                <SMMpacket />
            </div>
            <Statistics />
            <Partners />
        </div>
    )
}

const cards = [
    {
        id: 1,
        name: 'Mobiloqrafiya',
        about: 'Mobil cihazlarla peşəkar foto və video çəkilişlər təklif edirik. Yüksək keyfiyyətli vizual məzmun yaradırıq.',
        image: '/images/brend.webp'
    },
    {
        id: 2,
        name: 'SMM',
        about: 'Sosial mediada effektiv marketinq strategiyaları yaradırıq. Brendinizi geniş auditoriyaya tanıdırıq.',
        image: '/images/customer.avif'
    },
    {
        id: 3,
        name: 'Qrafik Dizayn',
        about: 'Brendiniz üçün kreativ və cəlbedici dizaynlar hazırlayırıq. Vizual kimliyinizi gücləndiririk.',
        image: '/images/brend.webp'
    },
    {
        id: 4,
        name: 'Seo Xidmətləri',
        about: 'Axtarış nəticələrində brendinizin mövqeyini artırmağa kömək edirik. Saytınızı optimallaşdırırıq.',
        image: '/images/shop.jpg'
    },
    {
        id: 5,
        name: 'Rəqəmsal marketinq',
        about: 'İnternet üzərindən brendin tanıdılması və müştəri bazasının artırılması.',
        image: '/images/brend.webp'
    },
    {
        id: 6,
        name: 'Influencer',
        about: 'Sosial media fenomenləri vasitəsilə məhsul və xidmətlərinizi daha geniş auditoriyaya çatdırmaq. ',
        image: '/images/brend.webp'
    },
]