import { Icon } from '@iconify/react'
import EventCard from '@/components/Events/EventCard/EventCard'
import { events } from '@/data/events'
import Link from 'next/link'

const HomeEvents: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3 text-center'>
          <div className='flex gap-2.5 items-center justify-center mb-4'>
            <span>
              <Icon
                icon={'ph:laptop'}
                width={24}
                height={24}
                className='text-blue-500'
              />
            </span>
            <p className='text-3xl font-semibold text-dark/75 dark:text-white/75'>
              Tech Events That Drive Innovation
            </p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white tracking-tight leading-11 mb-4'>
            Join Events That <span className='text-blue-600 dark:text-blue-400'>Build the Future</span>
          </h2>
          <p className='text-xl font-normal text-black/60 dark:text-white/60 max-w-3xl mx-auto leading-relaxed'>
            Every event we host advances technology innovation, empowers women in tech, and accelerates clean energy solutions. 
            From AI workshops to green energy networking, we're building a more sustainable and inclusive tech ecosystem.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {events.slice(0, 3).map((item, index) => (
            <div key={index} className=''>
              <EventCard item={item} />
            </div>
          ))}
        </div>
        <div className='text-center mt-16'>
          <div className='bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg max-w-2xl mx-auto'>
            <h3 className='text-2xl font-bold text-dark dark:text-white mb-4'>
              Can't Find What You're Looking For?
            </h3>
            <p className='text-dark/70 dark:text-white/70 mb-6'>
              We're always looking to create new tech opportunities. Let us know what kind of event would help advance innovation, support women in tech, or accelerate clean energy solutions.
            </p>
            <Link 
              href="/contactus" 
              className='bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 inline-block'
            >
              Suggest an Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeEvents 