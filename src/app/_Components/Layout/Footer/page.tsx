import React from 'react'
import footerLogo from '../../../../assets/FooterLogo.png'
import Image from "next/image";
import Link from "next/link";
import Insta from '../../../../assets/instaLogo.png'
import facebook from '../../../../assets/faceboolLogo.png'
import twitter from '../../../../assets/twitLogo.png'
import youtube from '../../../../assets/youtubeLogo.png'
import footerLogoImage from '../../../../assets/ALADDİN.svg'

export default function page() {
    return (
        <footer className="mt-20">
            <div className="flex flex-row items-center p-20 justify-between">
                <div className="flex flex-row items-start justify-between text-gray-700 w-3/5 leading-loose">
                    <div>
                        <p className="text-orange-700 font-semibold mb-3">Catalog</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">ESWT</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">HILT</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Skin IQ</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Rehab Simulators</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">EECP</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-3">Services</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Leasing</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Consultation</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-3">About</p>
                        <ul>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">About us</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">Partners</li>
                            <li className="cursor-pointer hover:underline hover:text-MainOrange">News</li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-orange-700 font-semibold mb-2">Contact</p>
                        <div className="bg-gray-400 h-px w-36 mb-1"></div>
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
            <div className="flex flex-row items-end gap-5 p-5 w-auto">
                <Image src={footerLogo} alt="logo" height={210} width={210} />
                <Image src={footerLogoImage} alt="Aladdin" height={250} />
            </div>
        </footer>
    )
}
