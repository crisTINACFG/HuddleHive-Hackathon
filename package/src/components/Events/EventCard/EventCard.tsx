import { Events } from '@/types/events'
import { Icon } from '@iconify/react'
import Image from 'next/image'
import Link from 'next/link'

const EventCard: React.FC<{ item: Events }> = ({ item }) => {
  const { name, location, price, tickets, images, category, date } = item

  const mainImage = images[0]?.src;
  const slug = name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  const eventLink = `/events/${slug}`;

  return (
    <div>
      <div className='relative rounded-2xl border border-dark/10 dark:border-white/10 group hover:shadow-3xl duration-300 dark:hover:shadow-white/20'>
        <div className='overflow-hidden rounded-t-2xl'>
          <Link href={eventLink}>
            {mainImage && (
              <Image
                src={mainImage}
                alt={name}
                width={440}
                height={300}
                className='w-full rounded-t-2xl group-hover:brightness-50 group-hover:scale-125 transition duration-300 delay-75'
                unoptimized={true}
              />
            )}
          </Link>
          <div className='absolute top-6 right-6 p-4 bg-white rounded-full hidden group-hover:block'>
            <Icon
              icon={'solar:arrow-right-linear'}
              width={24}
              height={24}
              className='text-black'
            />
          </div>
        </div>
        <div className='flex flex-col mobile:flex-row gap-5 mobile:gap-0 justify-between mb-6'>
          <div>
            <Link href={eventLink}>
              <h3 className='text-xl font-medium text-black dark:text-white duration-300 group-hover:text-primary'>
                {name}
              </h3>
            </Link>
            <p className='text-base font-normal text-black/50 dark:text-white/50'>
              {location}
            </p>
            <p className='text-sm font-medium text-primary mt-1'>
              Date: {date}
            </p>
            <p className='text-xs text-black/40 dark:text-white/40 mt-1 break-all'>
              Link: {eventLink}
            </p>
          </div>
          <div>
            <button className='text-base font-normal text-primary px-5 py-2 rounded-full bg-primary/10'>
              £{price}
            </button>
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex-1 flex flex-col items-center gap-2 border-e border-black/10 dark:border-white/20 py-4 px-2'>
            <Icon icon={'solar:tag-price-bold'} width={20} height={20} />
            <p className='text-sm mobile:text-base font-normal text-black dark:text-white text-center'>
              Price<br />£{price}
            </p>
          </div>
          <div className='flex-1 flex flex-col items-center gap-2 border-e border-black/10 dark:border-white/20 py-4 px-2'>
            <Icon icon={'solar:ticket-bold'} width={20} height={20} />
            <p className='text-sm mobile:text-base font-normal text-black dark:text-white text-center'>
              Tickets<br />{tickets}
            </p>
          </div>
          <div className='flex-1 flex flex-col items-center gap-2 py-4 px-2'>
            <span style={{fontSize: '20px'}}>✔</span>
            <p className='text-sm mobile:text-base font-normal text-black dark:text-white text-center'>
              Category<br />{category}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard 