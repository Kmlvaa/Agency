import Image from "next/image";
import Orange from '../../assets/Vector 6.svg'
import BannerImage from '../../assets/image.svg'
import AladdinLogoBanner from '../../assets/Frame 29.svg'
import checkmark from '../../assets/checkmark.png'
import roundedImage from '../../assets/Frame 206.svg'
import Statistics from '../_Components/Statistics/page'
import Partners from '../_Components/Partners/page'
import HomeBannerMobile from '../_Components/HomePageComponents/HomeBannerMobile/page'
import Services from '../_Components/HomePageComponents/Services/page'

export default function Home() {
  return (
    <div className="m-0">
      <div className="flex items-center justify-between relative max-sm:hidden">
        <div className="flex flex-row items-start w-full">
          <div className="h-full w-2/3  flex items-start">
            <Image src={Orange} alt="Section1" className="h-auto w-auto object-contain" />
            <p className="absolute top-1/3 w-2/5 text-white left-20">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda fugit officia, ex autem sed molestiae dolore natus veritatis sit accusantium excepturi. Tempora pariatur quis sunt debitis quos amet exercitationem quod?
            </p>
          </div>
          <div className="w-1/3 h-auto">
            <Image src={BannerImage} alt="Section2" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="absolute bottom-3 left-4 z-20 w-screen">
          <Image src={AladdinLogoBanner} alt="LogoBanner" className="w-full object-contain" />
        </div>
      </div>
      <HomeBannerMobile/>
      <div className="flex flex-col items-center gap-3 mt-32 max-lg:mt-20">
        <div className="bg-orange-600 rounded-full h-2 w-2"></div>
        <div className="w-24 h-0.5 bg-gray-500"></div>
      </div>
      <Services />
      <div className="flex flex-col items-start gap-3 mt-14 mb-10 px-28 max-lg:px-5">
        <div className="bg-orange-600 rounded-full h-2 w-2"></div>
        <div className="w-24 h-px bg-gray-500"></div>
      </div>
      <div className="flex flex-row items-center justify-between gap-10 px-28 mb-20 max-lg:pl-5 max-lg:pr-0 max-md:flex-col max-md:items-start">
        <div className="w-5/12 max-md:w-full">
          <h1 className="text-5xl mb-14 max-lg:text-3xl w-4/5">Ən <span className="font-semibold">keyfiyyətli</span> xidmətləri təqdim etmək</h1>
          <div className="flex flex-col gap-5">
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-semibold text-xl">Biz sərhədləri aşırıq</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-semibold text-xl">Yaradıcı yollar axtarırıq.</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
            <div className="flex flex-row items-start gap-4">
              <div>
                <Image src={checkmark} alt="checkmark" width={30} height={30} />
              </div>
              <div>
                <h1 className="font-semibold text-xl">Fərqli düşünməyi sevirik.</h1>
                <p className="text-sm text-gray-700">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-7/12 h-4/6 max-md:w-full">
          <Image src={roundedImage} alt="Xidmet" className="w-full object-contain h-full" />
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
