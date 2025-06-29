import { Icon } from '@iconify/react'
import PropertyCard from './Card/Card'
import { propertyHomes } from '@/data/propertyHomes'

const Properties: React.FC = () => {
  return (
    <section className='pt-0!'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='flex items-center justify-between mb-8'>
          <h2 className='text-3xl font-bold text-dark dark:text-white'>Featured Venues</h2>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {propertyHomes.slice(0, 3).map((item, index) => (
            <div key={index} className=''>
              <PropertyCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Properties
