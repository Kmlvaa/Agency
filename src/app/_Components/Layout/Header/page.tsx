'use client'
import React, { useState } from 'react'
import logo from '../../../../assets/agency.png'
import Image from "next/image";
import Link from "next/link";
import Dropdown from 'react-bootstrap/Dropdown';
import Screen from '../../../../assets/popUpScreen.svg'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function page() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header className="">
            <div className="flex flex-row items-center justify-evenly h-24 z-20 relative" >
                <div id='portfolioPopup' className={`bg-foreground w-full h-auto p-20 absolute top-24 left-0 rounded-b-3xl ${show ? 'block' : 'hidden'}`}>
                    <h1 className='text-Brown text-2xl font-bold mb-10'>Portfoliomuz</h1>
                    <div>
                        <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={3}
                            grabCursor={true}
                            autoplay={{
                                delay: 2000,
                            }}
                            loop
                        >
                            <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                            <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                            <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                            <SwiperSlide><Image src={Screen} alt='screen' /></SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex flex-row items-center gap-2 w-36">
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <p className="font-bold leading-none">aladdin agency</p>
                </div>
                <div className="flex flex-row items-center gap-12">
                    <Link href='/' className="cursor-pointer hover:text-MainOrange">Ana səhifə</Link>
                    <Link href='/about' className="cursor-pointer hover:text-MainOrange">Haqqımızda</Link>
                    <Link href='/contact' className="cursor-pointer hover:text-MainOrange">Əlaqə</Link>
                    <Link href='/portfolio' id='portfolio' className="cursor-pointer hover:text-MainOrange group" onMouseEnter={handleShow} >Portfolio</Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic" className="cursor-pointer hover:text-MainOrange">
                            Daha çox
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                </div>
                <div className="flex flex-row gap-4">
                    <button className="text-MainOrange border-2 border-MainOrange rounded-lg py-1 px-3 hover:bg-MainOrange hover:text-white">Daxil ol</button>
                    <button className="bg-MainOrange text-white rounded-lg py-1 px-3 text-sm border-2 hover:bg-white hover:text-MainOrange hover:border-MainOrange">Qeydiyyatdan keç</button>
                </div>
            </div>
        </header>
    )
}
