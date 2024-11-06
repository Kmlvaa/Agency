import { useAppDispatch, useAppSelector } from '@/app/redux/hooks';
import { setOpen } from '@/app/redux/slices/menu';
import React, { useState } from 'react'
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Image from 'next/image';
import logo from '../../../assets/agency.png'
import Link from 'next/link';

export default function page(props) {

    const [isDropdownOpen, setDropdownOpen] = useState(false)
    const handleClick = () =>
        setDropdownOpen(!isDropdownOpen)

    const isOpen = useAppSelector((state) => state.menu.isOpen)
    const dispatch = useAppDispatch()

    const handleClose = () => dispatch(setOpen());

    if (!isOpen) {
        () => { setDropdownOpen(false); }
    }

    const LinkClick = () => dispatch(setOpen());


    return (
        <Offcanvas show={isOpen} onHide={handleClose} {...props} className='!w-full'>
            <OffcanvasHeader closeButton>
                <div className="flex flex-row items-center gap-2 w-40 p-2">
                    <Image src={logo} alt="logo" width={40} height={40} />
                    <p className="font-bold leading-none text-lg">aladdin agency</p>
                </div>
            </OffcanvasHeader>
            <OffcanvasBody>
                <ul className='font-semibold text-2xl leading-[55px] w-full mt-5'>
                    <li className='flex flex-row items-center justify-between text-center'>
                        <Link href='/' className='text-black no-underline' onClick={LinkClick}>Ana səhifə</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </li>
                    <li className='flex flex-row items-center justify-between text-center'>
                        <Link href='/about' className='text-black no-underline' onClick={LinkClick}>Haqqımızda</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </li>
                    <li className='flex flex-row items-center justify-between text-center'>
                        <Link href='/portfolio' className='text-black no-underline' onClick={LinkClick}>Portfolio</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </li>
                    <li className='flex flex-row items-center justify-between text-center mt-1'>
                        <Link href='/services' className='text-black no-underline' onClick={LinkClick}>Xidmətlər</Link>
                        <p onClick={handleClick}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-right-fill ${isDropdownOpen ? 'hidden' : ''}`} viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className={`bi bi-caret-down-fill ${isDropdownOpen ? '' : 'hidden'}`} viewBox="0 0 16 16">
                                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
                            </svg>
                        </p>
                    </li>
                    <ul className={`flex-col gap-2 m-3 ${isDropdownOpen ? 'flex' : '!hidden'}`}>
                        {services?.map((service) => {
                            return (
                                <li key={service.id} className='bg-HeaderMenuLi px-4  w-auto text-MainOrange rounded-lg '>{service.name}</li>
                            );
                        })}
                    </ul>
                    <li className='flex flex-row items-center justify-between text-center'>
                        <Link href='/contact' className='text-black no-underline' onClick={LinkClick}>Əlaqə</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </li>
                    <li className='flex flex-row items-center justify-between text-center'>
                        <Link href='/team' className='text-black no-underline' onClick={LinkClick}>Komandamız</Link>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                    </li>
                </ul>
            </OffcanvasBody>
                <div className={` ${isDropdownOpen ? 'hidden' : ''}`}>
                    <ul>
                        <li>example@gmail.com</li>
                        <li>+994 xx xxx xx xx</li>
                    </ul>
                </div>
        </Offcanvas>
    )
}

const services = [
    {
        id: 1,
        name: "SMM",
    },
    {
        id: 2,
        name: "Influencer",
    },
    {
        id: 3,
        name: "Mobiloqrafiya",
    },
    {
        id: 4,
        name: "SEO services",
    },
    {
        id: 5,
        name: "Qrafik dizayn",
    },
    {
        id: 6,
        name: "Digital marketing",
    },
]
