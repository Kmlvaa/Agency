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
                        <div className="homePageCard cursor-pointer group flex flex-col items-center py-5 px-4 w-auto rounded-lg hover:bg-MainOrange hover:text-white">
                            <div className="my-10 max-sm:hidden">
                                <Image src={support} alt="support" width={100} height={100} />
                            </div>
                            <div>
                                <h1 className="font-bold text-xl mb-5">{service.name}</h1>
                                <p className="text-sm text-gray-600 group-hover:text-white max-sm:hidden">{service.desc}</p>
                            </div>
                            <div className='w-24 h-24 rounded-full bg-MainOrange group-hover:bg-white hidden max-sm:flex items-center justify-center '>
                                <Link href='/services' className='no-underline text-white group-hover:!text-MainOrange'>{/* <Icon name='angle double left' size='small' /> */} +</Link>
                            </div>
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
        name: "SEO services",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis",
        image: "support"
    },
    {
        name: "SMM",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis",
        image: "booking"
    },
    {
        name: "Mobiloqrafiya",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis",
        image: "curve"
    },
    {
        name: "Qrafik dizayn",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis",
        image: "social"
    },
]