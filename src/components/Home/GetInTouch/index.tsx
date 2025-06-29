import { Icon } from '@iconify/react'
import Link from 'next/link'

const GetInTouch: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-blue-600 to-purple-700 relative overflow-hidden'>
      <div className='absolute inset-0 bg-black/20'></div>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0 relative z-10'>
        <div className='text-center text-white mb-16'>
          <span className='inline-block bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full text-sm font-semibold mb-4'>
            Join Our Mission
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mb-6'>
            Be Part of the <span className='text-yellow-300'>Change</span>
          </h2>
          <p className='text-xl text-white/90 max-w-3xl mx-auto leading-relaxed'>
            Every person who joins our community, every event we host, every connection we make—it all adds up to real change. 
            Together, we're building a world where everyone has the opportunity to thrive.
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
          <div className='text-center text-white'>
            <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:calendar" className="text-2xl" />
            </div>
            <h3 className='text-xl font-bold mb-2'>Host an Event</h3>
            <p className='text-white/80 text-sm'>
              Share your skills, knowledge, or passion with the community. Every event creates opportunities for others.
            </p>
          </div>
          
          <div className='text-center text-white'>
            <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:users" className="text-2xl" />
            </div>
            <h3 className='text-xl font-bold mb-2'>Join Our Events</h3>
            <p className='text-white/80 text-sm'>
              Connect with others, learn new skills, and find the support you need to achieve your goals.
            </p>
          </div>
          
          <div className='text-center text-white'>
            <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:heart" className="text-2xl" />
            </div>
            <h3 className='text-xl font-bold mb-2'>Volunteer</h3>
            <p className='text-white/80 text-sm'>
              Give back to the community by volunteering your time and skills to help others succeed.
            </p>
          </div>
          
          <div className='text-center text-white'>
            <div className='w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:buildings" className="text-2xl" />
            </div>
            <h3 className='text-xl font-bold mb-2'>Partner With Us</h3>
            <p className='text-white/80 text-sm'>
              If you have a space or resources to share, partner with us to create more opportunities for our community.
            </p>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          <div className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Ready to Make a Difference?
            </h3>
            <p className='text-white/90 mb-6 leading-relaxed'>
              Whether you want to host an event, join our community, or support our mission in other ways, 
              we'd love to hear from you. Every action, no matter how small, contributes to positive change.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Link 
                href="/events" 
                className='bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center'
              >
                Find Events
              </Link>
              <Link 
                href="/contactus" 
                className='bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-3 px-6 rounded-full transition-all duration-300 text-center'
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className='bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20'>
            <h3 className='text-2xl font-bold text-white mb-4'>
              Support Our Mission
            </h3>
            <p className='text-white/90 mb-6 leading-relaxed'>
              Your support helps us provide free events, maintain our spaces, and create more opportunities for those who need them most. 
              Every contribution makes a real difference in someone's life.
            </p>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 text-white/90'>
                <Icon icon="ph:check-circle" className="text-green-400 text-xl" />
                <span>Free community events and workshops</span>
              </div>
              <div className='flex items-center gap-3 text-white/90'>
                <Icon icon="ph:check-circle" className="text-green-400 text-xl" />
                <span>Accessible spaces for all</span>
              </div>
              <div className='flex items-center gap-3 text-white/90'>
                <Icon icon="ph:check-circle" className="text-green-400 text-xl" />
                <span>Support for local businesses</span>
              </div>
            </div>
            <button className='w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 mt-6'>
              Support Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch