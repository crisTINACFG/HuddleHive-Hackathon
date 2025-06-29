import { Events } from '@/types/events';

export const events: Events[] = [
  {
    name: 'Women in Tech Leadership Summit',
    location: 'Level39, One Canada Square, Canary Wharf, London E14 5AB, UK',
    price: '0',
    tickets: 80,
    date: '10-07-2025',
    startTime: '09:00',
    endTime: '17:00',
    images: [
      { src: 'https://officebroker.io/wp-content/uploads/2024/03/Canary_Wharf_Group_Level_39_4.jpg.webp' },
      { src: 'https://level39.co/wp-content/uploads/2023/10/2022.08.09_CanaryWharf_0096-1-1024x683.jpg' },
      { src: 'https://www.freeofficefinder.com/images/uk/london/canary-wharf/breakout-space-for-clients-canada-square-level39-ltd-in-canary-wharf.PA7hd1lC.93268.16962354962525.jpeg?size=office_detail_large' },
      { src: 'https://canarywharf.com/wp-content/uploads/2023/05/canary-wharf-news-offices-l39-2-708x375-1.png' }
    ],
    category: 'tech-leadership',
    description: 'Empowering women in technology through leadership development, networking, and career advancement opportunities. Free event with mentorship and skill-building workshops.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'HuddleHive Women Hackathon',
    location: '5th Floor, United Kingdom House, 164-182 Oxford St, London W1D 1NN',
    price: '0',
    tickets: 120,
    date: '12-07-2025',
    startTime: '09:00',
    endTime: '18:00',
    images: [
      { src: 'https://assets.bizclikmedia.net/1800/3a74df3b0f0b6746e7160002c023efbb:7127cc0489db7e2c861710785af35af7/ocopus-nergy.jpg' },
      { src: 'https://esgnews.com/wp-content/uploads/2024/04/skynews-octopus-energy_6262095.jpg' },
      { src: 'https://media.licdn.com/dms/image/v2/D4E22AQEFtzprFapMBg/feedshare-shrink_2048_1536/B4EZe2aHquGwAo-/0/1751111990868?e=1753920000&v=beta&t=u6ig_Mjgqm33Civm9JY8ilSMbCVFV0WyKyADUO1dvL8' },
      { src: 'https://media.licdn.com/dms/image/v2/D4E22AQEhpZ5y67NVOw/feedshare-shrink_2048_1536/B4EZe1kWK3HYAw-/0/1751097917279?e=1753920000&v=beta&t=zWguUTGWBtVCimX93R43QjB0Jm-tzpYbE-BziijJ1r4' }
    ],
    category: 'hackathon',
    description: 'A 24-hour hackathon exclusively for women in tech, hosted by Octopus Energy and supported by BCS, The Chartered Institute for IT. Build innovative solutions for clean energy, sustainability, and social impact. Prizes, mentorship, professional development opportunities, and networking included.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'Green Energy Innovation Workshop',
    location: 'The Crystal, Royal Victoria Dock, London E16 1GB, UK',
    price: '15',
    tickets: 60,
    date: '15-08-2025',
    startTime: '10:00',
    endTime: '18:00',
    images: [
      { src: 'https://upload.wikimedia.org/wikipedia/commons/7/74/Siemens_Crystal_Building%2C_London.jpg' },
      { src: 'https://www.venkey.co.uk/image/venues/3634/2.png' },
      { src: 'https://canvas-events-locations.imgix.net/95f68a6ea7587c685d468f6a3d4e0439542151e4283221.36632614/1/Rm5-OpBoardrm4JPG.jpg?w=1200&fit=crop&mark=https://www.canvas-events.co.uk/images/canvas-yellow-watermark-v1.1.png&markw=150&markalign=top,left&markpad=50&dpr=2&q=20&usm=20&auto=format&h=675' },
      { src: 'https://www.worldconstructionnetwork.com/wp-content/uploads/sites/26/2017/10/7l-image-4.jpg' }
    ],
    category: 'energy-innovation',
    description: 'Explore cutting-edge renewable energy solutions, sustainable tech startups, and green innovation. Connect with energy entrepreneurs and environmental tech leaders.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: false,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'Tech for Good Community Day',
    location: 'Impact Hub King\'s Cross, 34b York Way, London N1 9AB, UK',
    price: '0',
    tickets: 150,
    date: '05-09-2025',
    startTime: '11:00',
    endTime: '16:00',
    images: [
      { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48kZ350CL3Gu1yZX2V5MBgKRgtD1ZuaxapQ&s' },
      { src: 'https://content.knightfrank.com/officespace/properties/6f7793b5-ff81-477c-bcd5-5832908baff8/images/20e9a97c7ad54e9f9f5702481c37ccfd.jpg?cio=true&w=1152' },
      { src: 'https://content.knightfrank.com/officespace/properties/6f7793b5-ff81-477c-bcd5-5832908baff8/images/e6600e8a08244fd18cf86ef1ab4134eb.jpg?cio=true&w=768' },
      { src: 'https://london.impacthub.net/wp-content/uploads/2025/03/chris-king-photography_impact-hub-kx-27-1.jpg' }
    ],
    category: 'tech-community',
    description: 'A day of tech workshops, coding for beginners, and digital literacy training. Focus on using technology to solve community challenges and create positive social impact.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'AI & Machine Learning Bootcamp',
    location: 'Google Campus London, 4-5 Bonhill Street, London EC2A 4BX, UK',
    price: '25',
    tickets: 40,
    date: '20-09-2025',
    startTime: '13:00',
    endTime: '17:00',
    images: [
      { src: 'https://assets.findalondonoffice.co.uk/uploads/api/pos/pos_330_2499.jpg' },
      { src: 'https://assets.findalondonoffice.co.uk/uploads/api/pos/pos_330_2500.jpg' },
      { src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Old_Street_roundabout_-_geograph.org.uk_-_1854617.jpg/410px-Old_Street_roundabout_-_geograph.org.uk_-_1854617.jpg' },
      { src: 'https://londonoffices.com/wp-content/uploads/2015/02/Google-Office-e1423736317828.jpg.webp' }
    ],
    category: 'ai-ml',
    description: 'Hands-on AI and machine learning workshop for all skill levels. Learn about responsible AI development and how to use AI for social good and energy optimization.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  },
  {
    name: 'Clean Energy Startup Networking',
    location: 'WeWork, 30 St Mary Axe, London EC3A 8BF, UK',
    price: '20',
    tickets: 100,
    date: '25-09-2025',
    startTime: '18:00',
    endTime: '21:00',
    images: [
      { src: 'https://www.freeofficefinder.com/images/uk/london/bishopsgate/private-workspace-in-st-mary-axe-regus-bishopsgate.ul4fUVrX.72523.15063373956785.jpeg?size=office_detail_large' },
      { src: 'https://media.rightmove.co.uk/dir/202k/201728/132992822/201728_2693-2_IMG_01_0000_max_656x437.jpeg' },
      { src: 'https://www.cbre.co.uk/resources/fileassets/GB-Plus-478029/c554f59a/30Sm%203_Photo_4_large.jpg?key=pdpBanner&viewPortWidth=375' },
      { src: 'https://www.freeofficefinder.com/images/uk/london/bishopsgate/building-external-for-st-mary-axe-regus-bishopsgate.qH3fV5oI.72523.15450538701426.jpeg?size=office_detail_large' }
    ],
    category: 'energy-networking',
    description: 'Connect with clean energy entrepreneurs, investors, and sustainability leaders. Share ideas, find collaborators, and build partnerships for a greener future.',
    amenities: {
      wheelchairAccessible: true,
      prayerRooms: true,
      airConditioning: true,
      soundSystem: true,
      wifi: true
    }
  }
]; 