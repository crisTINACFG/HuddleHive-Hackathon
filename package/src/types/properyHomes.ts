export type PropertyHomes = {
  name: string
  slug: string
  location: string
  price: string
  capacity: number
  images: PropertyImage[]
  category: string
}

interface PropertyImage {
  src: string;
}
