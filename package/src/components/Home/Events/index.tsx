import { Icon } from '@iconify/react'
import EventCard from '@/components/Events/EventCard/EventCard'
import { events } from '@/app/api/events'

const HomeEvents: React.FC = () => {
  return (
    <section>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='mb-16 flex flex-col gap-3 '>
          <div className='flex gap-2.5 items-center justify-center'>
            <span>
              <Icon
                icon={'ph:calendar'}
                width={20}
                height={20}
                className='text-primary'
              />
            </span>
            <p className='text-3xl font-semibold text-dark/75 dark:text-white/75'>
              Events
            </p>
          </div>
          <h2 className='text-40 lg:text-52 font-medium text-black dark:text-white text-center tracking-tight leading-11 mb-2'>
            Upcoming events you can't miss.
          </h2>
          <p className='text-xm font-normal text-black/50 dark:text-white/50 text-center'>
            Discover exciting events and opportunities happening across our venues!
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {events.map((item, index) => (
            <div key={index} className=''>
              <EventCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeEvents 