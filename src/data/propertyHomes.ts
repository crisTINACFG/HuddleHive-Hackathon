import { PropertyHomes } from '@/types/properyHomes';

export const propertyHomes: PropertyHomes[] = [
  {
    name: 'Paddington Works',
    slug: 'paddington-works',
    location: '8	Hermitage Street, Paddington, London W2	1BE, UK',
    price: '2000',
    capacity: 60,
    images: [
      { src: '/images/properties/property4/pad3.jpg' },
      { src: '/images/properties/property4/pad2.jpg' },
      { src: '/images/properties/property4/pad1.jpg' },
      { src: '/images/properties/property4/pad4.jpg' }
  ],
    category: 'office',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: false,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'Monmouth Coffee',
    slug: 'monmouth-coffee',
    location: '27 Monmouth St, Covent Garden, London WC2H 9EU, UK',
    price: '400',
    capacity: 60,
    images: [
      { src: '/images/properties/property1/mon2.jpg' },
      { src: '/images/properties/property1/mon1.jpg' },
      { src: '/images/properties/property1/mon3.jpg' },
      { src: '/images/properties/property1/mon4.jpg' }
    ],
    category: 'Cafe',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: false,
      airConditioning: true,
      soundSystem: false,
      wifi: true
    }
  },
  {
    name: 'The British Museum',
    slug: 'the-british-museum',
    location: 'Great Russell St, Bloomsbury, London WC1B 3DG, UK',
    price: '4000',
    capacity: 1500,
    images: [
      { src: '/images/properties/property2/BM2.jpg' },
      { src: '/images/properties/property2/BM3.jpg' },
      { src: '/images/properties/property2/BM1.jpg' },
      { src: '/images/properties/property2/BM4.jpg' }
    ],
    category: 'community hall',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'University of Surrey',
    slug: 'university-of-surrey',
    location: 'University of Surrey, Stag Hill, Guildford, Surrey GU2 7XH, UK',
    price: '15000',
    capacity: 3000,
    images:  [
      { src: '/images/properties/property3/sur1.jpg' },
      { src: '/images/properties/property3/sur2.jpg' },
      { src: '/images/properties/property3/sur3.jpg' },
      { src: '/images/properties/property3/sur4.jpg' }
  ],
    category: 'university',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  
  {
    name: 'Hyde Park',
    slug: 'hyde-park',
    location: 'Hyde Park, London W2 2UH, UK',
    price: '0',
    capacity: 35000,
    images: [
      { src: '/images/properties/property5/hyde1.jpg' },
      { src: '/images/properties/property5/hyde2.jpg' },
      { src: '/images/properties/property5/hyde3.jpg' },
      { src: '/images/properties/property5/hyde4.jpg' }  
    ],
    category: 'community hall',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: false,
      airConditioning: false,
      soundSystem: true,
      wifi: false
    }
  },
  {
    name: 'Google Campus London',
    slug: 'google-campus-london',
    location: '4-5 Bonhill St, London EC2A 4BX, UK',
    price: '1500',
    capacity: 500,
    images: [
      { src: '/images/properties/property6/gog1.jpg' },
      { src: '/images/properties/property6/gog2.jpg' },
      { src: '/images/properties/property6/gog3.jpg' },
      { src: '/images/properties/property6/gog4.jpg' }
    ],
    category: 'office',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
]; 