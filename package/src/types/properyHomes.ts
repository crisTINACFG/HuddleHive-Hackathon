export type PropertyHomes = {
  name: string
  slug: string
  location: string
  price: string
  capacity: number
  images: PropertyImage[]
  category: string
  availability?: VenueAvailability[]
  description?: string
  amenities?: string[]
  bookingNotes?: string
}

export interface PropertyImage {
  src: string;
}

export interface VenueAvailability {
  date: string
  timeSlots: TimeSlot[]
}

export interface TimeSlot {
  startTime: string
  endTime: string
  isAvailable: boolean
  price?: string
}
