import React from 'react'
import Image from "next/image";
import Insta from '../../../../assets/instaLogo.png'
import facebook from '../../../../assets/faceboolLogo.png'
import twitter from '../../../../assets/twitLogo.png'
import youtube from '../../../../assets/youtubeLogo.png'
import footerLogoImage from '../../../../assets//Frame 230.svg'
import respFooter from '../../../../assets/Frame 238.svg'

export default function page() {
    return (
        <footer className="pt-20 flex flex-col justify-between max-sm:flex-row">
            <div className="flex flex-row items-center justify-between px-20 py-20 max-sm:p-5 max-sm:items-start max-sm:w-3/4 max-lg:px-5 max-lg:py-10">
                <div className="flex flex-row items-start gap-10 justify-between max-sm:!flex-col text-gray-700 w-3/5 leading-loose max-sm:text-2xl text-xl">
                    <div>
                        <p className="text-orange-700 font-semibold mb-3 hover:underline hover:text-MainOrange">Catalog</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">ESWT</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">HILT</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Skin IQ</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Rehab Simulators</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">EECP</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-3 hover:underline hover:text-MainOrange">Services</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Leasing</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Consultation</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-3 hover:underline hover:text-MainOrange">About</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">About us</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Partners</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">News</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-2 hover:underline hover:text-MainOrange">Contact</p>
                        <div className="bg-gray-500 h-[0.5px] w-36 mb-1"></div>
                        <ul>
                            <li>example@gmail.com</li>
                            <li>+994 xx xxx xx xx</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <Image src={Insta} alt="instagram" width={40} height={40} className="cursor-pointer hover:underline hover:text-MainOrange" />
                    <Image src={facebook} alt="facebook" width={40} height={40} className="cursor-pointer hover:underline hover:text-MainOrange" />
                    <Image src={twitter} alt="twitter" width={40} height={40} className="cursor-pointer hover:underline hover:text-MainOrange" />
                    <Image src={youtube} alt="youtube" width={40} height={40} className="cursor-pointer hover:underline hover:text-MainOrange" />
                </div>
            </div>
            <div className="p-5 w-screen h-auto max-sm:hidden">
                <div>
                    <Image src={footerLogoImage} alt="Aladdin" className='w-full h-full object-contain' />
                </div>
            </div>
            <div className='w-1/4 h-[700px] hidden max-sm:flex'>
                <Image src={respFooter} alt='responsive image footer' className='w-full h-full' />
            </div>
        </footer>
    )
}
