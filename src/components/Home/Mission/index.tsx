import { Icon } from '@iconify/react'
import Image from 'next/image'

const Mission: React.FC = () => {
  return (
    <section className='py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800'>
      <div className='container max-w-8xl mx-auto px-5 2xl:px-0'>
        <div className='text-center mb-16'>
          <span className='inline-block bg-yellow-400 text-black px-6 py-2 rounded-full text-sm font-semibold mb-4'>
            Our Mission
          </span>
          <h2 className='text-4xl md:text-5xl font-bold text-dark dark:text-white mb-6'>
            Building a <span className='text-blue-600 dark:text-blue-400'>Tech-Powered</span> Future for Everyone
          </h2>
          <p className='text-xl text-dark/70 dark:text-white/70 max-w-3xl mx-auto leading-relaxed'>
            We&apos;re connecting communities through technology and sustainable energy solutions. Every event we host advances innovation, 
            empowers women in tech, and builds bridges toward a greener, more inclusive future. Partnering with industry leaders like 
            <span className='text-green-600 dark:text-green-400 font-semibold'> Octopus Energy</span> and 
            <span className='text-blue-600 dark:text-blue-400 font-semibold'> BCS, The Chartered Institute for IT</span> to accelerate clean energy innovation and professional development.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-16 items-center mb-20'>
          <div>
            <h3 className='text-3xl font-bold text-dark dark:text-white mb-6'>
              Stories That Drive Innovation
            </h3>
            <div className='space-y-6'>
              <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-green-500'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Icon icon="ph:laptop" className="text-green-600 dark:text-green-400 text-xl" />
                  </div>
                  <div>
                    <h4 className='font-semibold text-dark dark:text-white mb-2'>Sarah&apos;s Tech Journey</h4>
                    <p className='text-dark/70 dark:text-white/70 text-sm leading-relaxed'>
                      "After being the only woman in my engineering team, I found Gatherly&apos;s Women in Tech events. Now I lead a diverse team 
                      developing renewable energy software and mentor other women entering the field."
                    </p>
                  </div>
                </div>
              </div>
              
              <div className='bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border-l-4 border-blue-500'>
                <div className='flex items-start gap-4'>
                  <div className='w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0'>
                    <Icon icon="ph:leaf" className="text-blue-600 dark:text-blue-400 text-xl" />
                  </div>
                  <div>
                    <h4 className='font-semibold text-dark dark:text-white mb-2'>The HuddleHive Hackathon Success</h4>
                    <p className='text-dark/70 dark:text-white/70 text-sm leading-relaxed'>
                      "Our partnership with Octopus Energy and BCS for the HuddleHive Women Hackathon has been incredible. We&apos;ve discovered 
                      breakthrough clean energy solutions and empowered dozens of women to pursue careers in sustainable technology."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className='relative'>
            <div className='bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl text-white'>
              <h4 className='text-2xl font-bold mb-6'>Our Impact in Numbers</h4>
              <div className='grid grid-cols-2 gap-6'>
                <div className='text-center'>
                  <div className='text-3xl font-bold mb-2'>500+</div>
                  <div className='text-sm opacity-90'>Tech Events</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold mb-2'>2,000+</div>
                  <div className='text-sm opacity-90'>Lives Changed</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold mb-2'>150+</div>
                  <div className='text-sm opacity-90'>Energy Startups</div>
                </div>
                <div className='text-center'>
                  <div className='text-3xl font-bold mb-2'>65%</div>
                  <div className='text-sm opacity-90'>Women in Tech</div>
                </div>
              </div>
              <div className='mt-6 pt-6 border-t border-white/20'>
                <div className='text-center'>
                  <div className='text-lg font-semibold mb-2'>Key Partners</div>
                  <div className='text-sm opacity-90'>BCS, The Chartered Institute for IT • Octopus Energy • Tech Giants • Clean Energy Leaders</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-3 gap-8'>
          <div className='text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <div className='w-16 h-16 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:lightbulb" className="text-yellow-600 dark:text-yellow-400 text-2xl" />
            </div>
            <h3 className='text-xl font-bold text-dark dark:text-white mb-3'>Tech Innovation</h3>
            <p className='text-dark/70 dark:text-white/70'>
              We provide the tools, spaces, and connections that drive technological innovation and sustainable energy solutions.
            </p>
          </div>
          
          <div className='text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <div className='w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:users-three" className="text-green-600 dark:text-green-400 text-2xl" />
            </div>
            <h3 className='text-xl font-bold text-dark dark:text-white mb-3'>Women in Tech</h3>
            <p className='text-dark/70 dark:text-white/70'>
              Every event is designed to empower and support women in technology, creating a more diverse and inclusive tech ecosystem.
            </p>
          </div>
          
          <div className='text-center p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg'>
            <div className='w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Icon icon="ph:leaf" className="text-blue-600 dark:text-blue-400 text-2xl" />
            </div>
            <h3 className='text-xl font-bold text-dark dark:text-white mb-3'>Clean Energy</h3>
            <p className='text-dark/70 dark:text-white/70'>
              We accelerate the transition to clean energy by connecting innovators, entrepreneurs, and communities working toward sustainability.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Mission 