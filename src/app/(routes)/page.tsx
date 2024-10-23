import Image from "next/image";
import Orange from '../../assets/Vector 6.svg'
import BannerImage from '../../assets/image.svg'
import AladdinLogoBanner from '../../assets/Frame 29.svg'
import support from '../../assets/support.png'
import booking from '../../assets/booking.png'
import curve from '../../assets/curve.png'
import social from '../../assets/social.png'
import checkmark from '../../assets/checkmark.png'
import roundedImage from '../../assets/Frame 205.svg'
import Statistics from '../_Components/Statistics/page'
import Partners from '../_Components/Partners/page'

export default function Home() {
  return (
    <div className="m-0">
      <div className="flex items-center justify-between relative">
        <div className="flex flex-row items-start w-full">
          <div>
            <Image src={Orange} alt="Section1" className="" />
            <p className="absolute top-1/3 w-2/5 text-white left-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit officia, ex autem sed molestiae dolore natus veritatis sit accusantium excepturi. Tempora pariatur quis sunt debitis quos amet exercitationem quod?
            </p>
          </div>
          <Image src={BannerImage} alt="Section2" className="w-auto" />
        </div>
        <div className="absolute bottom-3 left-0">
          <Image src={AladdinLogoBanner} alt="LogoBanner" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3 mt-32">
        <div className="bg-orange-600 rounded-full h-2 w-2"></div>
        <div className="w-24 h-0.5 bg-gray-500"></div>
      </div>
      <div className="flex flex-col mt-10 items-center">
        <div className="text-center text-5xl w-2/5">
          <h1><span className="font-bold">Müştərilərimizə</span> təqdim etdiyimiz xidmətlər</h1>
        </div>
        <div className="my-20 grid grid-cols-4 justify-between gap-4">
          <div className="homePageCard flex flex-col items-center py-5 px-4 w-72 rounded-lg">
            <div className="my-10">
              <Image src={support} alt="support" width={100} height={100} />
            </div>
            <div>
              <h1 className="font-bold text-xl mb-5">SEO services</h1>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis</p>
            </div>
            <div className="w-full h-px bg-gray-400 my-5"></div>
          </div>
          <div className="homePageCard flex flex-col items-center py-5 px-4 w-72 rounded-lg">
            <div className="my-10">
              <Image src={social} alt="support" width={100} height={100} />
            </div>
            <div>
              <h1 className="font-bold text-xl mb-5">SMM</h1>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis</p>
            </div>
            <div className="w-full h-px bg-gray-400 my-5"></div>
          </div>
          <div className="homePageCard flex flex-col items-center py-5 px-4 w-72 rounded-lg">
            <div className="my-10">
              <Image src={curve} alt="support" width={100} height={100} />
            </div>
            <div>
              <h1 className="font-bold text-xl mb-5">Qrafik dizayn</h1>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis</p>
            </div>
            <div className="w-full h-px bg-gray-400 my-5"></div>
          </div>
          <div className="homePageCard flex flex-col items-center py-5 px-4 w-72 rounded-lg">
            <div className="my-10">
              <Image src={booking} alt="support" width={100} height={100} />
            </div>
            <div>
              <h1 className="font-bold text-xl mb-5">Mobiloqrafiya</h1>
              <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quaerat sunt rem aliquid aut asperiores neque debitis</p>
            </div>
            <div className="w-full h-px bg-gray-400 my-5"></div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-3 mt-32 mb-10 px-28">
        <div className="bg-orange-600 rounded-full h-2 w-2"></div>
        <div className="w-24 h-px bg-gray-500"></div>
      </div>
      <div className="flex flex-row items-center justify-between px-28 mb-20">
        <div className="w-1/2">
          <h1 className="text-5xl mb-20">Ən <span className="font-semibold">keyfiyyətli</span> xidmətləri təqdim etmək</h1>
          <div className="flex flex-col gap-10">
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-bold text-xl">Biz sərhədləri aşırıq</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-bold text-xl">Yaradıcı yollar axtarırıq.</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-bold text-xl">Fərqli düşünməyi sevirik.</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Image src={roundedImage} alt="Xidmet" className="w-11/12 h-5/6"/>
        </div>
      </div>
      <Statistics />
      <Partners />
    </div>
  );
}

const cardDetails = [
  {
    id: 1,
    name: "SEO services",
  },
  {
    id: 2,
    name: "SMM",
  },
  {
    id: 3,
    name: "Qrafik Dizayn",
  },
  {
    id: 4,
    name: "Mobiloqrafiya",
  },
]
