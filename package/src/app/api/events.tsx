import { Events } from '@/types/events'

export const events: Events[] = [
  {
    name: 'HubbleHive',
    location: '2 Kingdom St, London W2 6BD, UK',
    price: '0',
    tickets: 150,
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
    location: 'Wembley, London HA9 0WS, UK',
    price: '25000',
    tickets: 60,
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
    location: 'Great Russell St, Bloomsbury, London WC1B 3DG, UK',
    price: '4000',
    tickets: 60,
    images: [
      { src: '/images/properties/property2/BM2.jpg' },
      { src: '/images/properties/property2/BM3.jpg' },
      { src: '/images/properties/property2/BM1.jpg' },
      { src: '/images/properties/property2/BM4.jpg' }
    ],
    category: 'educational'
  },
  {
    name: 'University of Surrey',
    location: 'Guildford, Surrey GU2 7XH, UK',
    price: '15000',
    tickets: 60,
    images:  [
      { src: '/images/properties/property3/O2-3.jpg' },
      { src: '/images/properties/property3/O  2-1.jpg' },
      { src: '/images/properties/property3/02-2.jpg' },
      { src: '/images/properties/property3/02-4.jpg' }
  ],
    category: 'sports'
  },
  
  {
    name: 'Hyde Park',
    location: 'London W2 2UH, UK',
    price: '0',
    tickets: 60,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'outdoor'
  },
  {
    name: 'Google Campus London',
    location: '4-5 Bonhill St, London EC2A 4BX, UK',
    price: '1500',
    tickets: 60,
    images: [{ src: '/images/properties/placeholder.jpg' }],
    category: 'corporate'
  },
]
