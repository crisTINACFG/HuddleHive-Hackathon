import { Events } from '@/types/events'

export const events: Events[] = [
  {
    name: 'HubbleHive',
    location: '2 Kingdom St, London W2 6BD, UK',
    price: '0',
    tickets: 150,
    date: '10-07-2025',
    startTime: '09:00',
    endTime: '17:00',
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
    price: '25',
    tickets: 60,
    date: '15-08-2025',
    startTime: '19:30',
    endTime: '22:30',
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
    price: '15',
    tickets: 60,
    date: '05-09-2025',
    startTime: '10:00',
    endTime: '16:00',
    images: [
      { src: '/images/properties/property2/BM2.jpg' },
      { src: '/images/properties/property2/BM3.jpg' },
      { src: '/images/properties/property2/BM1.jpg' },
      { src: '/images/properties/property2/BM4.jpg' }
    ],
    category: 'educational'
  }
]
