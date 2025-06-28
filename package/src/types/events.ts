export type Events = {
  name: string
  location: string
  price: string
  tickets: number
  images: PropertyImage[]
  category: string
}

interface PropertyImage {
  src: string;
}
