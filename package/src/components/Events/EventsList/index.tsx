import EventCard from '@/components/Events/EventCard/EventCard'
import { events } from '@/app/api/events'

const EventsListing: React.FC = () => {
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
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

export default EventsListing 