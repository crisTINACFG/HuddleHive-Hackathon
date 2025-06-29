import Image from 'next/image'
import Link from 'next/link'

const Hero: React.FC = () => {
  return (
    <section className='!py-0'>
      <div className='bg-gradient-to-b from-skyblue via-lightskyblue dark:via-[#4298b0] to-white/10 dark:to-black/10 overflow-hidden relative'>
        <div className='container max-w-8xl mx-auto px-5 2xl:px-0 pt-32 md:pt-60 md:pb-68'>
          <div className='relative text-white dark:text-dark text-center md:text-start z-10'>
            <p className='text-inherit text-xm font-medium'>London, UK</p>
            <h1 className='text-inherit text-6xl sm:text-9xl font-semibold -tracking-wider md:max-w-45p mt-4 mb-6'>
              Vibrant spaces
            </h1>
            
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
                Max occupancy: 100
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/tube.png'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-tube.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Wheelchair access
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <Image
                src={'/images/hero/parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='block dark:hidden'
                unoptimized={true}
              />
              <Image
                src={'/images/hero/dark-parking.svg'}
                alt='sofa'
                width={32}
                height={32}
                className='hidden dark:block'
                unoptimized={true}
              />
              <p className='text-sm sm:text-base font-normal text-inherit'>
                Parking space
              </p>
            </div>
            <div className='flex flex-col sm:items-center gap-3'>
              <p className='text-2xl sm:text-3xl font-medium text-inherit'>
                £75.00
              </p>
              <p className='text-sm sm:text-base font-normal text-black/50 dark:text-white/50'>
                For hire
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
