import Image from 'next/image'
import React from 'react'
import support from '../../../../assets/support.png'
import 'semantic-ui-css/semantic.min.css'
import { Icon } from 'semantic-ui-react'
import Link from 'next/link'

export default function page() {
    return (
        <div className="flex flex-col mt-10 items-center px-5 max-lg:mt-6">
            <div className="text-center text-4xl max-lg:text-3xl w-4/5 max-sm:text-2xl">
                <h1><span className="font-bold">Müştərilərimizə</span> təqdim etdiyimiz xidmətlər</h1>
            </div>
            <div className="my-20 grid grid-cols-4 justify-between gap-4 max-md:grid-cols-2 w-full">
                {services?.map((service) => {
                    return (
                        <div className="homePageCard h-min cursor-pointer group flex flex-col items-center py-5 px-4 w-auto rounded-lg hover:bg-MainOrange hover:text-white">
                            <div className="my-10 max-sm:hidden">
                                <Image src={support} alt="support" width={100} height={100} />
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-5">{service.name}</h1>
                                <p className="text-sm text-gray-600 group-hover:text-white max-sm:hidden">{service.about}</p>
                            </div>
                            {/* <div className='max-sm:w-24 max-sm:h-24 rounded-full bg-MainOrange group-hover:bg-white hidden max-sm:flex items-center justify-center '>
                                <Link href='/services' className='no-underline text-white group-hover:!text-MainOrange'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right w-8 h-8" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                </Link>
                            </div> */}
                            <div className="w-full h-px bg-gray-400 my-5 max-sm:hidden"></div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

const services = [
    {
        id: 1,
        name: 'Mobiloqrafiya',
        about: 'Mobil cihazlarla peşəkar foto və video çəkilişlər təklif edirik. Yüksək keyfiyyətli vizual məzmun yaradırıq.',
        image: 'curve'
    },
    {
        id: 2,
        name: 'SMM',
        about: 'Sosial mediada effektiv marketinq strategiyaları yaradırıq. Brendinizi geniş auditoriyaya tanıdırıq.',
        image: 'booking'
    },
    {
        id: 3,
        name: 'Qrafik Dizayn',
        about: 'Brendiniz üçün kreativ və cəlbedici dizaynlar hazırlayırıq. Vizual kimliyinizi gücləndiririk.',
        image: 'social'
    },
    {
        id: 4,
        name: 'Seo Xidmətləri',
        about: 'Axtarış nəticələrində brendinizin mövqeyini artırmağa kömək edirik. Saytınızı optimallaşdırırıq.',
        image: 'support'
    },
]