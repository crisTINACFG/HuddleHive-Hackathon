"use client"
import PropertyCard from '@/components/Home/Properties/Card/Card'
import { propertyHomes } from '@/data/propertyHomes'
import { PropertyHomes } from '@/types/properyHomes'
import { Icon } from '@iconify/react'
import { useState, useMemo } from 'react'
import FilterToggle from '@/components/shared/FilterToggle'

const PropertiesListing: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000])
  const [capacityRange, setCapacityRange] = useState<[number, number]>([0, 35000])

  // Get unique categories
  const categories = useMemo(() => {
    const cats = [...new Set(propertyHomes.map(property => property.category))]
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

  // Filter properties based on selected criteria
  const filteredProperties = useMemo(() => {
    return propertyHomes.filter(property => {
      // Category filter
      if (selectedCategory !== 'all' && property.category !== selectedCategory) {
        return false
      }

      // Price filter
      const price = parseInt(property.price)
      if (price < priceRange[0] || price > priceRange[1]) {
        return false
      }

      // Capacity filter
      if (property.capacity < capacityRange[0] || property.capacity > capacityRange[1]) {
        return false
      }

      // Amenities filter
      if (selectedAmenities.length > 0) {
        return selectedAmenities.every(amenity => 
          property.amenities?.[amenity as keyof typeof property.amenities] === true
        )
      }

      return true
    })
  }, [selectedCategory, selectedAmenities, priceRange, capacityRange])

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
    setPriceRange([0, 20000])
    setCapacityRange([0, 35000])
  }

  const getActiveFiltersCount = () => {
    let count = 0
    if (selectedCategory !== 'all') count++
    if (selectedAmenities.length > 0) count++
    if (priceRange[0] > 0 || priceRange[1] < 20000) count++
    if (capacityRange[0] > 0 || capacityRange[1] < 35000) count++
    return count
  }

  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        {/* Filters Section */}
        <div className='mb-12'>
          <FilterToggle title="Filter Venues" defaultOpen={true}>
            <div className='flex items-center justify-between mb-6'>
              <div className='flex items-center gap-4'>
                <span className='text-sm text-dark/60 dark:text-white/60'>
                  {filteredProperties.length} of {propertyHomes.length} venues
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
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>Venue Type</h4>
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
                    {category === 'all' ? 'All Types' : category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            {/* Amenities Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>Accessibility & Amenities</h4>
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
                Price Range: £{priceRange[0]} - £{priceRange[1]}
              </h4>
              <div className='flex items-center gap-4'>
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={priceRange[0]}
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                  className='flex-1'
                />
                <input
                  type="range"
                  min="0"
                  max="20000"
                  step="100"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                  className='flex-1'
                />
              </div>
            </div>

            {/* Capacity Range Filter */}
            <div className='mb-6'>
              <h4 className='text-sm font-medium text-dark dark:text-white mb-3'>
                Capacity Range: {capacityRange[0]} - {capacityRange[1]} people
              </h4>
              <div className='flex items-center gap-4'>
                <input
                  type="range"
                  min="0"
                  max="35000"
                  step="100"
                  value={capacityRange[0]}
                  onChange={(e) => setCapacityRange([parseInt(e.target.value), capacityRange[1]])}
                  className='flex-1'
                />
                <input
                  type="range"
                  min="0"
                  max="35000"
                  step="100"
                  value={capacityRange[1]}
                  onChange={(e) => setCapacityRange([capacityRange[0], parseInt(e.target.value)])}
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
                      Type: {selectedCategory}
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
                  {(priceRange[0] > 0 || priceRange[1] < 20000) && (
                    <span className='px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 rounded-full text-sm'>
                      Price: £{priceRange[0]} - £{priceRange[1]}
                    </span>
                  )}
                  {(capacityRange[0] > 0 || capacityRange[1] < 35000) && (
                    <span className='px-3 py-1 bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-400 rounded-full text-sm'>
                      Capacity: {capacityRange[0]} - {capacityRange[1]}
                    </span>
                  )}
                </div>
              </div>
            )}
          </FilterToggle>
        </div>

        {/* Results Section */}
        {filteredProperties.length === 0 ? (
          <div className='text-center py-12'>
            <Icon icon="ph:buildings" width={64} height={64} className='text-gray-400 mx-auto mb-4' />
            <h3 className='text-xl font-semibold text-dark dark:text-white mb-2'>No venues found</h3>
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
            {filteredProperties.map((item, index) => (
              <div key={index} className=''>
                <PropertyCard item={item} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default PropertiesListing
