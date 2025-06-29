"use client"
import EventCard from '@/components/Events/EventCard/EventCard'
import { events } from '@/data/events'
import { Events } from '@/types/events'
import { Icon } from '@iconify/react'
import { useState, useMemo } from 'react'
import FilterToggle from '@/components/shared/FilterToggle'

const EventsListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 50])
  const [ticketRange, setTicketRange] = useState<[number, number]>([0, 150])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(events.map(event => event.category))]
    return ['all', ...cats]
  }, [])

  // Amenity options
  const amenityOptions = [
    { key: 'wheelchairAccessible', label: 'Wheelchair Accessible', icon: 'ph:wheelchair' },
    { key: 'prayerRooms', label: 'Prayer Rooms', icon: 'ph:house-simple' },
    { key: 'airConditioning', label: 'Air Conditioning', icon: 'ph:snowflake' },
    { key: 'soundSystem', label: 'Sound System', icon: 'ph:speaker-high' },
    { key: 'wifi', label: 'WiFi', icon: 'ph:wifi' }
  ]

  // Filter events based on selected criteria
  const filteredEvents = useMemo(() => {
    return events.filter(event => {
      // Category filter
      if (selectedCategory !== 'all' && event.category !== selectedCategory) {
        return false
      }

      // Price filter
      const price = parseInt(event.price)
      if (price < priceRange[0] || price > priceRange[1]) {
        return false
      }

      // Ticket availability filter
      if (event.tickets < ticketRange[0] || event.tickets > ticketRange[1]) {
        return false
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        return selectedAmenities.every(amenity => 
          event.amenities?.[amenity as keyof typeof event.amenities] === true
        )
      }

      return true
    })
  }, [selectedCategory, selectedAmenities, priceRange, ticketRange])

  const handleAmenityToggle = (amenity: string) => {
    setSelectedAmenities(prev => 
      prev.includes(amenity) 
        ? prev.filter(a => a !== amenity)
        : [...prev, amenity]
    )
  }

  const clearAllFilters = () => {
    setSelectedCategory('all')
    setSelectedAmenities([])
    setPriceRange([0, 50])
    setTicketRange([0, 150])
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedCategory !== 'all') count++
    if (selectedAmenities.length > 0) count++
    if (priceRange[0] > 0 || priceRange[1] < 50) count++
    if (ticketRange[0] > 0 || ticketRange[1] < 150) count++
    return count
  }

  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        {/* Filters Section */}
        <div className='mb-12'>
          <FilterToggle title="Filter Events" defaultOpen={true}>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-4'>
                <span className='text-sm text-dark/60 dark:text-white/60'>
                  {filteredEvents.length} of {events.length} events
                </span>
                {getActiveFiltersCount() > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className='text-sm text-primary hover:text-dark dark:hover:text-white transition-colors'
                  >
                    Clear all filters
                  </button>
                )}
              </div>
            </div>

            {/* Category Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>Event Type</h4>
              <div className='flex flex-wrap gap-2'>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                    }`}
                  >
                    {category === 'all' ? 'All Types' : category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>Venue Accessibility & Amenities</h4>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
                {amenityOptions.map(amenity => (
                  <button
                    key={amenity.key}
                    onClick={() => handleAmenityToggle(amenity.key)}
                    className={`flex items-center gap-2 p-3 rounded-xl text-sm font-medium transition-colors ${
                      selectedAmenities.includes(amenity.key)
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 border border-green-300 dark:border-green-700'
                        : 'bg-gray-100 dark:bg-gray-700 text-dark dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600 border border-transparent'
                    }`}
                  >
                    <Icon icon={amenity.icon} width={16} height={16} />
                    <span>{amenity.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>
                Ticket Price Range: £{priceRange[0]} - £{priceRange[1]}
              </h4>
              <div className='flex items-center gap-4'>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className='flex-1'
                />
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className='flex-1'
                />
              </div>
            </div>

            {/* Ticket Availability Range Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>
                Ticket Availability: {ticketRange[0]} - {ticketRange[1]} tickets
              </h4>
              <div className='flex items-center gap-4'>
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="5"
                  value={ticketRange[0]}
                  onChange={(e) => setTicketRange([parseInt(e.target.value), ticketRange[1]])}
                  className='flex-1'
                />
                <input
                  type="range"
                  min="0"
                  max="150"
                  step="5"
                  value={ticketRange[1]}
                  onChange={(e) => setTicketRange([ticketRange[0], parseInt(e.target.value)])}
                  className='flex-1'
                />
              </div>
            </div>

            {/* Active Filters Display */}
            {getActiveFiltersCount() > 0 && (
              <div className='pt-4 border-t border-dark/10 dark:border-white/20'>
                <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>Active Filters:</h4>
                <div className='flex flex-wrap gap-2'>
                  {selectedCategory !== 'all' && (
                    <span className='px-3 py-1 bg-primary/20 text-primary rounded-full text-sm'>
                      Type: {selectedCategory.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </span>
                  )}
                  {selectedAmenities.map(amenity => {
                    const option = amenityOptions.find(a => a.key === amenity)
                    return (
                      <span key={amenity} className='px-3 py-1 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-full text-sm'>
                        {option?.label}
                      </span>
                    )
                  })}
                  {(priceRange[0] > 0 || priceRange[1] < 50) && (
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm'>
                      Price: £{priceRange[0]} - £{priceRange[1]}
                    </span>
                  )}
                  {(ticketRange[0] > 0 || ticketRange[1] < 150) && (
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm'>
                      Tickets: {ticketRange[0]} - {ticketRange[1]}
                    </span>
                  )}
                </div>
              </div>
            )}
          </FilterToggle>
        </div>

        {/* Results Section */}
        {filteredEvents.length === 0 ? (
          <div className='text-center py-12'>
            <Icon icon="ph:calendar" width={64} height={64} className='text-gray-400 mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-dark dark:text-white mb-2'>No events found</h3>
            <p className='text-dark/60 dark:text-white/60 mb-4'>
              Try adjusting your filters to see more results
            </p>
            <button
              onClick={clearAllFilters}
              className='px-6 py-3 bg-primary text-white rounded-full hover:bg-dark transition-colors'
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
            {filteredEvents.map((item, index) => (
              <div key={index} className=''>
                <EventCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default EventsListing 