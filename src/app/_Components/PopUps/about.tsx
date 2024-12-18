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
                        Aladdin Agency, müştərilərinin biznes məqsədlərini daha dərindən başa düşərək, onların brendini rəqəmsal
                        aləmdə gücləndirmək üçün yaradıcı strategiyalar və yenilikçi texnologiyalardan istifadə edir.
                        Agentliyimiz hər bir layihədə fərqli yanaşmalar təklif edərək, həm sosial media marketinqi,
                        həm də mobil kontent vasitəsilə hədəf kütlələrə ən təsirli şəkildə çatır. Aladdin Agency,
                        uğurunu müştərilərinin müvəffəqiyyətində görür və onların rəqəmsal bazarda inkişafını təmin etmək üçün hər zaman yanındadır.
                    </p>
                </div>
                <div className='h-[200px] w-2/5'>
                    <Image src={socialMedia} alt='social media image' className='w-full h-full object-contain' />
                </div>
            </div>
        </div>
    )
}
