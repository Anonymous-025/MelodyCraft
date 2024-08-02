import React from 'react'
import HeroImg from '../../assets/website/team.png'

const Hero = () => {
  return (
    <div className='dark:bg-gray-950 dark:text-white duration-300 '>
      <div className='container min-h-[620px] flex mt-10 sm:mt-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 place-items-center'>
          {/* Image section */}
          <div data-aos='zoom-in' className='order-1 sm:order-2 relative'>
            <img
              src={HeroImg}
              alt=''
              className='w-full sm:max-w-[280px] md:max-w-[430px]'
            />
            <div
              data-aos='slide-right'
              className='absolute -bottom-5 -right-8 px-4 py-2 rounded-xl bg-white dark:bg-gray-900 dark:text-white shadow-md'
            >
              <p className='text-gray-500 text-sm '>⭐Courses</p>
              <h1 className='font-bold'>
                600+ <span className='font-normal'>Done</span>
              </h1>
            </div>
          </div>

          {/* Text section */}
          <div className='space-y-5 order-2 sm:order-1 xl:pr-40 '>
            <h1
              data-aos='fade-up'
              className='text-4xl sm:text-5xl font-semibold'
              style={{ lineHeight: 1.2 }}
            >
              Master the Art of Music,{' '}
              <span className='text-primary'> One Note at a Time</span>
            </h1>
            <p data-aos='fade-up' data-aos-delay='300'>
              Whether you're a beginner or a seasoned musician, our tailored
              lessons, expert guidance, and innovative tools will help you
              refine your technique, understand music theory, and unleash your
              creativity. Embark on a harmonious journey and craft your musical
              prowess, one note at a time.
            </p>
            <button
              data-aos='fade-up'
              data-aos-delay='500'
              data-aos-offset='0'
              className='primary-btn'
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
