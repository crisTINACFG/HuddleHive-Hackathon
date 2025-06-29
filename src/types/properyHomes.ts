export type PropertyHomes = {
  name: string
  slug: string
  location: string
  price: string
  capacity: number
  images: PropertyImage[]
  category: string
  amenities?: {
    wheelchairAccessible: boolean
    prayerRooms: boolean
    airConditioning: boolean
    soundSystem: boolean
    wifi: boolean
  }
}

interface PropertyImage {
  src: string;
}
