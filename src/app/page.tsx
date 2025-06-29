import FeaturedProperty from '@/components/Home/FeaturedProperty'
import Hero from '@/components/Home/Hero'
import Properties from '@/components/Home/Properties'
import Services from '@/components/Home/Services'
import Testimonial from '@/components/Home/Testimonial'
import BlogSmall from '@/components/shared/Blog'
import HomeEvents from '@/components/Home/Events'
import Mission from '@/components/Home/Mission'
import GetInTouch from '@/components/Home/GetInTouch'
//import FAQ from '@/components/Home/FAQs'

export default function Home() {
  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <HomeEvents />
      <Testimonial />
      <Properties />
      <GetInTouch />
    </main>
  )
}
