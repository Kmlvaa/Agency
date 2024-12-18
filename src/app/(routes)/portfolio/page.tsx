import React from 'react'
import screen from '../../../assets/Screen.svg'
import agency from '../../../assets/agency.webp'
import Image from 'next/image'
import Partners from '../../_Components/Partners/page'
import Statistics from '../../_Components/Statistics/page'
import video1 from '../../../assets/video1.webp'
import video2 from '../../../assets/video2.webp'

export default function page() {
  return (
    <div className='px-28 pt-20 max-lg:!px-5 max-md:bg-background'>
      <div className='max-lg:text-center mb-20 w-full'>
        <h1 className='font-semibold text-5xl'>Uğurlu layihələrimiz</h1>
      </div>
      <div className='grid grid-cols-2 items-center justify-between gap-20 max-lg:gap-10 max-lg:justify-center max-md:grid-cols-1'>
        {data?.map((x, index) => {
          return (
            <div className={`flex flex-col gap-4 w-auto max-md:items-center ${index % 2 == 1 ? 'items-end text-end' : ''}`} key={x.id}>
              <Image src={x.url} width={500} height={400} alt='screen' className='rounded-xl cover max-md:w-full' />
              <h1 className='font-semibold text-xl'>{x.title}</h1>
              <p className='font-sans break-words'>{x.desk}</p>
            </div> 
          );
        })}
      </div>
      <div className='flex flex-col gap-10 mt-28'>
        <h1 className='font-semibold text-5xl mb-10'>Video...</h1>
        <div className='flex items-center gap-16 max-sm:flex-col'>
          <div className='w-1/2 h-[420px] max-md:w-full'>
            <Image src={video1} alt='screen' className='w-full h-full cover max-sm:w-full rounded-xl' />
          </div>
          <div className='w-1/2 max-md:w-full text-end max-md:!text-center'>
            <h4>Kreativ Videolar ilə Hədəfinizə Daha Yaxın</h4>
            <p className='font-sans'>Video hekayəçilik günümüzdə markaların öz mesajlarını
              daha təsirli və emosional yolla çatdırması üçün ən güclü
              vasitələrdən biridir. Aladdin Agency olaraq, hər bir markanın
              unikal kimliyinə uyğun video kontent hazırlamaq bizim əsas prioritetimizdir.
              Kreativ yanaşma ilə tamaşaçıları heyran qoyan və yadda qalan videolar ərsəyə gətiririk.
              Müasir texnologiyalardan və innovativ montaj üsullarından istifadə edərək,
              izləyicilərinizi heyrətləndirəcək vizuallar yaradırıq. İstər reklam,
              istər məhsul tanıtımı, istərsə də brend hekayəsi – hər bir layihə bizim üçün sənət əsəridir.
              Portfoliomuza nəzər salın və markanızı zirvəyə qaldırmaq üçün doğru tərəfdaş seçdiyinizdən əmin olun!</p>
          </div>
        </div>
        <div className='flex items-center text-start gap-16 max-sm:flex-col-reverse max-sm:!text-center'>
          <div className='w-1/2 max-md:w-full'>
            <h4>Hər Kadra Dəyər Qatan Detallar</h4>
            <p className='font-sans'>Uğurlu video yalnız çəkiliş deyil, həm də peşəkar detalların mükəmməl birləşməsidir.
              Aladdin Agency komandası olaraq, hər bir kadra incəliklə yanaşır və ən kiçik detalı
              belə unudulmaz etməyə çalışırıq. Fərqli sektorlara və müştəri tələblərinə uyğun özəlləşdirilmiş
              video həlləri təqdim edirik. Hər video çəkilişi unikal yanaşma ilə planlaşdırılır və keyfiyyətli
              icra ilə həyata keçirilir. Montaj prosesində müasir trendlərdən istifadə edərək,
              müştərilərimizin mesajını tamaşaçıya ən təsirli şəkildə çatdırırıq. Bizimlə işləməklə
              yalnız bir video deyil, markanızın ruhunu əks etdirən unikal bir əsər əldə edəcəksiniz.
              Gözünüzlə görün və ilham alın!</p>
          </div>
          <div className='w-1/2 h-[420px] max-md:w-full'>
            <Image src={video2} alt='screen' className='w-full h-full cover max-sm:w-full rounded-xl' />
          </div>
        </div>
      </div>
      <Statistics />
      <Partners />
    </div>
  )
}

interface Data {
  id: number;
  title: string;
  desk: string;
  url: string;
}

let data: Data[] = [
  {
    id: 1,
    title: 'E-Ticarət Platforması: "Rahat Alışveriş"',
    desk: "Müştərilər üçün istifadəçi dostu və intuitiv interfeysə sahib bir e-ticarət platforması hazırlamaq. Layihədə sürətli məhsul axtarışı, sadələşdirilmiş ödəniş prosesi və çoxdilli dəstək kimi funksiyalar tətbiq edilmişdir. Nəticədə müştərilərimiz onlayn satışlarını artırmış, istifadəçi məmnuniyyətində əhəmiyyətli irəliləyiş əldə etmişlər.",
    url: '/images/rahat.jpeg'
  },
  {
    id: 2,
    title: 'Mobil Tətbiq: "Fəal Sağlamlıq"',
    desk: "Fərdlərin gündəlik sağlamlıq vərdişlərini izləmələri üçün xüsusi bir mobil tətbiq hazırlanmışdır. Tətbiq istifadəçilərə qidalanma planları, məşq cədvəlləri və stress idarəetmə məsləhətləri təqdim edir. İnteraktiv interfeys və müasir dizayn sayəsində tətbiq yüksək reytinqlər almış və geniş istifadəçi kütləsi qazanmışdır.",
    url: '/images/saglamliq.jpg'
  },
  {
    id: 3,
    title: 'CRM Sisteminin İnkişafı: "Effektiv Müştəri İdarəetməsi"',
    desk: "Orta və böyük müəssisələr üçün müştəri əlaqələrinin idarə edilməsini optimallaşdırmaq məqsədilə xüsusi CRM sistemi yaradılmışdır. Sistem, müştəri məlumatlarını idarə etməyi, satış təqibini və analiz hesabatlarını asanlaşdırır. Layihə, şirkətlərin iş proseslərini avtomatlaşdıraraq məhsuldarlığı əhəmiyyətli dərəcədə artırmışdır.",
    url: '/images/musteri.jpeg'
  },
  {
    id: 4,
    title: 'Vebsayt Dizaynı: "Markanızı Tanıyın"',
    desk: "Müxtəlif sektorlar üçün yaradıcı və müasir dizayn yanaşması ilə unikal vebsaytlar hazırlanmışdır. Layihələrdə yüksək sürətli yükləmə, mobil uyğunluq və interaktiv elementlərə xüsusi diqqət yetirilmişdir. Nəticədə müştərilərimiz brendlərinin tanınma səviyyəsini artırmış və potensial müştərilərini cəlb etməkdə uğur qazanmışdır.",
    url: '/images/marka.png'
  },
];
