import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <div className='mb-6'>
              <span className='inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-4'>
                🌟 Building Bridges, Creating Opportunities
              </span>
            </div>
            <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight'>
              Where <span className='text-yellow-300'>Dreams</span> Meet <span className='text-yellow-300'>Opportunity</span>
            </h1>
            <p className='text-lg md:text-xl font-medium mb-8 leading-relaxed max-w-4xl'>
              We believe everyone deserves a chance to connect, learn, and grow. Gatherly brings together communities, 
              creates opportunities for those who need them most, and builds bridges between people who can help each other thrive.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mb-8'>
              <Link 
                href="/events" 
                className='bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg'
              >
                Find Your Community
              </Link>
              <Link 
                href="/properties" 
                className='bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 border border-white/30'
              >
                Host an Event
              </Link>
            </div>
            <div className='flex items-center gap-4 text-sm opacity-90'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                <span>500+ events hosted</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                <span>2,000+ lives changed</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 bg-green-400 rounded-full'></span>
                <span>100% community-driven</span>
              </div>
            </div>
          </div>
          <div className='hidden md:block absolute -top-2 -right-68'>
            <Image
              src={'/images/hero/heroBanner.png'}
              alt='heroImg'
              width={1082}
              height={1016}
              priority={false}
              unoptimized={true}
            />
          </div>
        </div>
        <div className='md:absolute bottom-0 md:-right-68 xl:right-0 bg-white dark:bg-black py-12 px-8 mobile:px-16 md:pl-16 md:pr-[295px] rounded-2xl md:rounded-none md:rounded-tl-2xl mt-24'>
          <div className='grid grid-cols-2 sm:grid-cols-4 md:flex gap-16 md:gap-24 sm:text-center dark:text-white text-black'>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/sofa.png'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-sofa.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Empowers Local Communities
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/event.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/event.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Creates Opportunities
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/networking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/networking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Builds Lasting Connections
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/local.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/local.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Supports Local Businesses
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
