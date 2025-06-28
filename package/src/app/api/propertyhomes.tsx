import { PropertyHomes } from '@/types/properyHomes'

export const propertyHomes: PropertyHomes[] = [
  {
    name: 'Paddington Works',
    slug: 'paddington-works',
    location: '8 Hermitage Street, Paddington, London W2 1BE, UK',
    price: '2000',
    capacity: 60,
    images: [
      { src: '/images/properties/property4/pad3.jpg' },
      { src: '/images/properties/property4/pad2.jpg' },
      { src: '/images/properties/property4/pad1.jpg' },
      { src: '/images/properties/property4/pad4.jpg' }
  ],
    category: 'coorporate'
  },
  {
    name: 'Wembley Stadium',
    slug: 'wembley-stadium',
    location: 'Wembley, London HA9 0WS, UK',
    price: '25000',
    capacity: 90000,
    images: [
      { src: '/images/properties/property1/Wembley1.jpg' },
      { src: '/images/properties/property1/Wembley2.jpg' },
      { src: '/images/properties/property1/Wembley3.jpg' },
      { src: '/images/properties/property1/Wembley4.jpg' }
    ],
    category: 'sports'
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
    category: 'educational'
  },
  {
    name: 'The O2 Arena',
    slug: 'the-o2-arena',
    location: 'Peninsula Square, Greenwich, London SE10 0DX, UK',
    price: '15000',
    capacity: 20000,
    images:  [
      { src: '/images/properties/property3/O2-3.jpg' },
      { src: '/images/properties/property3/O  2-1.jpg' },
      { src: '/images/properties/property3/02-2.jpg' },
      { src: '/images/properties/property3/02-4.jpg' }
  ],
    category: 'event'
  },
  
  {
    name: 'Hyde Park',
    slug: 'hyde-park',
    location: 'London W2 2UH, UK',
    price: '0',
    capacity: 35000,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'outdoor'
  },
  {
    name: 'Manchester Central Convention Complex',
    slug: 'manchester-central-convention-complex',
    location: 'Peter St, Manchester M2 3GX, UK',
    price: '5000',
    capacity: 2500,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'corporate'
  },
  {
    name: 'Edinburgh Castle',
    slug: 'edinburgh-castle',
    location: 'Castlehill, Edinburgh EH1 2NG, UK',
    price: '7000',
    capacity: 1000,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'event'
  },
  {
    name: 'Bristol Harbourside',
    slug: 'bristol-harbourside',
    location: 'Bristol BS1 5TX, UK',
    price: '3000',
    capacity: 800,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'outdoor'
  },
  {
    name: 'University of Oxford',
    slug: 'university-of-oxford',
    location: 'Oxford OX1 2JD, UK',
    price: '6000',
    capacity: 2000,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'educational'
  },
  {
    name: 'Barbican Centre',
    slug: 'barbican-centre',
    location: 'Silk St, London EC2Y 8DS, UK',
    price: '8000',
    capacity: 2000,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'entertainment'
  }
]
