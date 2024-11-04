import React from 'react'
import about1 from '../../../assets/about1.jpeg'
import about2 from '../../../assets/about2.jpeg'
import about3 from '../../../assets/about3.jpeg'
import arrow from '../../../assets/arrowOrange.svg'
import smm from '../../../assets/aboutSMM.jpeg'
import dizayn from '../../../assets/aboutdizayn.jpeg'
import mobil from '../../../assets/aboutmobil.jpeg'
import Statistics from '../../_Components/Statistics/page'
import Partners from '../../_Components/Partners/page'
import Image from 'next/image'

export default function page() {
    return (
        <div className='pt-10 text-gray-900 max-md:bg-background'>
            <div className='w-[1200px] px-28 flex flex-col m-auto gap-20 max-lg:px-5 max-[1200px]:w-auto'>
                <div>
                    <h1 className='text-5xl font-bold'>Biz <span className='text-MainOrange'>kimik?</span></h1>
                </div>
                <div className='flex flex-row items-end justify-center gap-4'>
                    <div className='w-full h-[500px] relative max-sm:h-[400px]'>
                        <Image src={about1} alt='about image 1' className='object-cover h-full w-full rounded-3xl grayscale' />
                        <Image src={arrow} alt='arrow' className='absolute top-5 right-5' />
                        <div className='bg-background rounded-xl p-2 absolute bottom-5 mx-3'>
                            <p className='text-sm max-sm:text-[8px] max-sm:leading-tight'>Aladdin Agency 2020-ci ildə təsis edilib və digital marketinq sahəsində müştərilərimizə innovativ həllər təqdim edirik. Təcrübəmiz və yaradıcı düşüncələrimiz sayəsində müştərilərimizin digər firmalardan daha sürətli və əlverişli olaraq onların bütün digital marketinq ehtiyaclarını həyata keçiririk.</p>
                        </div>
                    </div>
                    <div className='w-full h-[400px]  max-sm:h-[350px]'>
                        <Image src={about2} alt='about image 2' className='object-cover h-full w-full rounded-3xl grayscale' />
                    </div>
                    <div className='w-[300px] h-[250px] max-sm:hidden'>
                        <Image src={about3} alt='about image 3' className='object-cover h-full w-full rounded-3xl' />
                    </div>
                </div>
            </div>
            <div className='my-28 mx-0 flex flex-col items-center gap-20'>
                <div className='w-[700px] mb-10 text-center max-sm:w-[400px]'>
                    <h1 className='font-bold text-5xl mb-3 max-sm:text-3xl'>Hansı <span className='text-MainOrange'>Xidmətləri</span> göstəririk?</h1>
                    <p className='text-gray-700'>Aladdin Agency olaraq müştərilərimizə kompleks digital marketinq həlləri təklif edirik. Bizim xidmətlərimiz arasında aşağıdakılar var:</p>
                </div>
                <div className='flex gap-5 items-center justify-between px-0 max-sm:flex-col-reverse'>
                    <div className='w-2/4 pl-28 max-lg:pl-5 max-sm:w-full'>
                        <p className='font-semibold'><span className='text-MainOrange'>Social Media Marketinq (SMM):</span> Müştəri məhsulunu və xidmətini genişləndirmək üçün xüsusi strategiyalar hazırlayırıq. Bizim SMM xidmətlərimiz Facebook, Instagram, Twitter, LinkedIn kimi əsas platformalar üçün istifadə edilən müasir marketinq strategiyalarını əhatə edir. Müştərilərimizə məqsədəuyğun və yaradıcı strategiyalar təklif edirik ki, bu da onların diqqətini çəkərək, digital müraciətlərini artırır. Bizim SMM xidmətlərimiz şəxsi və effektivdir.</p>
                    </div>
                    <div className='w-2/4 max-sm:w-full max-sm:px-5'>
                        <Image src={smm} alt='smm'/>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-end justify-between max-sm:!flex-col max-sm:text-start'>
                    <div className='w-2/4 max-sm:w-full max-sm:px-5'>
                        <Image src={dizayn} alt='smm'/>
                    </div>
                    <div className='w-2/4 pr-28 max-lg:pr-5 max-sm:w-full pl-5'>
                        <p className='font-semibold'>Biz müştərilərimizə qrafik dizayn sahəsində peşəkar xidmətlər təqdim edirik. Bu xidmətlər loqo dizaynı, brendinq, reklam materiallarının hazırlanması, sosial media post dizaynları və UI/UX dizaynlarını əhatə edir. Yaratdığımız dizaynlar brendlərin unikal kimliyini və dəyərlərini əks etdirir.
                        <span className='text-MainOrange'>Qrafik dizayn</span> kurslarımızı uğurla tamamlayan hər bir tələbə rəsmi sertifikatla təmin olunur və peşəkar dizayn dünyasında iş imkanları əldə edir. Kurslarımız praktik biliklər və yaradıcılıq bacarıqlarını inkişaf etdirməyə yönəlib.</p>
                    </div>
                </div>
                <div className='flex gap-5 items-center text-start justify-between px-0 max-sm:flex-col-reverse'>
                    <div className='w-2/4 pl-28 max-lg:pl-5 max-sm:w-full'>
                        <p className='font-semibold'>Biz müştərilərimizə <span className='text-MainOrange'>Mobilografiya</span> sahəsində peşəkar xidmətlər təqdim edirik. Bu xidmətlərə mobil cihazlarla çəkilən yüksək keyfiyyətli foto və video çəkilişləri, vizual məzmunun redaktəsi, sosial media üçün optimallaşdırılmış vizual məzmunun hazırlanması və müxtəlif brendlərin məhsullarının yaradıcı formada təqdim edilməsi daxildir. 
                        Mobilografiya kurslarımızı uğurla tamamlayan tələbələrimiz sosial media platformalarında peşəkar şəkildə məzmun yaratmaq bacarıqları əldə edirlər.</p>
                    </div>
                    <div className='w-2/4 max-sm:w-full max-sm:px-5'>
                        <Image src={mobil} alt='smm'/>
                    </div>
                </div>
            </div>
            <Statistics />
            <Partners />
        </div>
    )
}
