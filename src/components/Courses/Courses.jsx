import React from 'react'
import { FaMusic, FaSpotify, FaHeadphones, FaGuitar } from 'react-icons/fa'

const skillsData = [
  {
    name: 'Instruments',
    icon: <FaMusic className='text-4xl text-primary' />,
    link: '#',
    description:
      'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    aosDelay: '0',
  },
  {
    name: 'Singing',
    icon: <FaSpotify className='text-4xl text-primary' />,
    link: '#',
    description:
      'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    aosDelay: '300',
  },
  {
    name: 'Music Theory',
    icon: <FaHeadphones className='text-4xl text-primary' />,
    link: '#',
    description:
      'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    aosDelay: '500',
  },
  {
    name: 'Certification',
    icon: <FaGuitar className='text-4xl text-primary' />,
    link: '#',
    description:
      'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus',
    aosDelay: '700',
  },
]
const Courses = () => {
  return (
    <>
      <span id='about'></span>
      <div className='bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center'>
        <div className='container'>
          {/* Header */}
          <div className='pb-12 text-center space-y-3'>
            <h1
              data-aos='fade-up'
              className='text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary'
            >
              Explore Our Courses
            </h1>
            <p
              data-aos='fade-up'
              className='text-gray-600 dark:text-gray-400 text-sm'
            >
              Explore Our Courses: Unleash Your Musical Potential, One Note at a
              Time
            </p>
          </div>

          {/* Courses cards */}
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4'>
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos='fade-up'
                data-aos-delay={skill.aosDelay}
                className='card space-y-3 sm:space-y-4 p-4'
              >
                <div>{skill.icon}</div>
                <h1 className='text-lg font-semibold'>{skill.name}</h1>
                <p className='text-gray-600 dark:text-gray-400'>
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos='fade-up'
            data-aos-delay='900'
            data-aos-offset='0'
            className='text-center mt-4 sm:mt-8'
          >
            <button className='primary-btn'>Learn More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Courses
