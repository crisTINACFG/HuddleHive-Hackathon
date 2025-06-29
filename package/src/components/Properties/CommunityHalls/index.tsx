import PropertyCard from '@/components/Home/Properties/Card/Card'
import { propertyHomes } from '@/data/propertyHomes'

const CommunityHalls: React.FC = () => {
    // Filter for community hall category
    const filtered = propertyHomes.filter(
        (item) => item.category.trim().toLowerCase() === 'community hall'
    );
    return (
        <section className='pt-0!'>
            <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {filtered.map((item, index) => (
                        <div key={index} className=''>
                            <PropertyCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default CommunityHalls; 