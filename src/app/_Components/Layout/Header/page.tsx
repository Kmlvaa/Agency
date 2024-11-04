'use client'
import React from 'react'
import logo from '../../../../assets/agency.png'
import Image from "next/image";
import Link from "next/link";
import AboutPopup from '../../PopUps/about'
import ContactPopup from '../../PopUps/contact'
import PortfolioPopUp from '../../PopUps/portfolio'
import Hamburger from 'hamburger-react';
import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { setOpen } from '@/app/redux/slices/menu';
import Menu from '../../Menu/Menu'

export default function page() {

    const isOpen = useAppSelector((state) => state.menu.isOpen)
    const dispatch = useAppDispatch()

    const toggleShow = () => dispatch(setOpen());

    return (
        <header className="z-50 max-md:bg-background">
            <div className="flex flex-row items-center justify-between h-24 z-20 font-normal px-28 max-lg:px-5" >
                <div className="flex flex-row items-center gap-2 w-36">
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <p className="font-bold leading-none">aladdin agency</p>
                </div>
                <div className="flex flex-row items-center gap-12 max-lg:gap-5 max-lg:text-md max-sm:hidden">
                    <Link href='/' className="no-underline text-black cursor-pointer hover:!text-MainOrange">Ana səhifə</Link>
                    <div className='group relative'>
                        <Link href='/about' className="no-underline text-black cursor-pointer hover:!text-MainOrange">Haqqımızda</Link>
                        <AboutPopup />
                    </div>
                    <div className='group relative'>
                        <Link href='/contact' className="no-underline text-black cursor-pointer hover:!text-MainOrange">Əlaqə</Link>
                        <ContactPopup />
                    </div>
                    <div className='group relative'>
                        <Link href='/portfolio' id='portfolio' className="no-underline text-black cursor-pointer hover:!text-MainOrange" >Portfolio</Link>
                        <PortfolioPopUp />
                    </div>
                    <div className='relative group'>
                        <Link href='#' id='more' className="no-underline text-black cursor-pointer hover:!text-MainOrange group" >Daha çox </Link>
                        <div className='absolute top-14 w-40 h-40 p-3 border border-t-white border-l-foreground border-b-foreground border-r-foreground bg-background text-Brown font-semibold rounded-b-xl flex-col justify-evenly hidden group-hover:flex shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>Portfolio</div>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>Contact</div>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>About us</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4 max-sm:hidden">
                    <button className="bg-MainOrange text-white rounded-md py-1 px-4 text-sm border font-extralight hover:bg-white hover:text-MainOrange hover:border-MainOrange">Müraciət et</button>
                </div>
                <div className='hidden max-sm:flex'>
                    <Hamburger toggled={isOpen} toggle={toggleShow} />
                </div>
            </div>
            <Menu scroll={false} backdrop={false} />
        </header>
    )
}


