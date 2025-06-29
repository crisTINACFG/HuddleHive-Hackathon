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
}

interface PropertyImage {
  src: string;
}
