'use client'
import React from 'react'
import logo from '../../../../assets/agency.png'
import Image from "next/image";
import Link from "next/link";
import AboutPopup from '../../PopUps/aboutPopup/about'
import ContactPopup from '../../PopUps/contact'
import PortfolioPopUp from '../../PopUps/portfolio'

export default function page() {

    return (
        <header className="relative">
            <div className="flex flex-row items-center justify-evenly h-24 z-20 font-normal" >
                <div className="flex flex-row items-center gap-2 w-36">
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <p className="font-bold leading-none">aladdin agency</p>
                </div>
                <div className="flex flex-row items-center gap-12 max-lg:gap-5">
                    <Link href='/' className="cursor-pointer hover:text-MainOrange">Ana səhifə</Link>
                    <div className='AboutDiv'>
                        <Link href='/about' className="cursor-pointer hover:text-MainOrange">Haqqımızda</Link>
                        <AboutPopup />
                    </div>
                    <div className='group'>
                        <Link href='/contact' className="cursor-pointer hover:text-MainOrange">Əlaqə</Link>
                        <ContactPopup />
                    </div>
                    <div className=' group'>
                        <Link href='/portfolio' id='portfolio' className="cursor-pointer hover:text-MainOrange" >Portfolio</Link>
                        <PortfolioPopUp />
                    </div>
                    <div className='relative group'>
                        <Link href='#' id='more' className="cursor-pointer hover:text-MainOrange group" >Daha çox </Link>
                        <div className='absolute top-14 w-40 h-40 p-3 border border-t-white border-l-foreground border-b-foreground border-r-foreground bg-background text-Brown font-semibold rounded-b-xl flex-col justify-evenly hidden group-hover:flex shadow-[0px_0px_8px_0px_rgba(0,_0,_0,_0.1)]'>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>Portfolio</div>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>Contact</div>
                            <div className='hover:bg-foreground rounded-xl p-2 cursor-pointer'>About us</div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="text-MainOrange border border-gray-200 rounded-lg py-1 px-3 hover:bg-MainOrange hover:text-white max-[1200px]:hidden">Daxil ol</button>
                    <button className="bg-MainOrange text-white rounded-lg py-1 px-3 text-sm border hover:bg-white hover:text-MainOrange hover:border-MainOrange">Qeydiyyatdan keç</button>
                </div>
            </div>
        </header>
    )
}
