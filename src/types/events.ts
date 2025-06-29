export type Events = {
  name: string
  location: string
  price: string
  tickets: number
  date: string
  startTime: string
  endTime: string
  images: PropertyImage[]
  category: string
  description?: string
  amenities?: {
    wheelchairAccessible: boolean
    prayerRooms: boolean
    airConditioning: boolean
    soundSystem: boolean
    wifi: boolean
  }
}

export interface PropertyImage {
  src: string;
}
