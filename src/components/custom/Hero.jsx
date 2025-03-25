import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <div className='flex flex-col item-center mx-56 gap-9'>
      <h1
       className='font-extrabold text-[50px] text-center mt-16'>
        <span className='text-[#f56551]'>Discover Your Next Adventure with AI:</span> Personalized Itineraries at Your Fingertips</h1>
        <p className='text-xl text-gray-500 text-center'>Your Personal trip planner and travel curator, creating custom itineraries tailored to your budget.</p>
        <div className='p-3  flex justify-between items-center px-100'>
        <Link to={'/create-trip'}>
        <Button>Get Started, It's Free</Button>
        </Link>
        </div>
        <img src="https://aitrip.tubeguruji.com/landing.png" className='-mt-20' />

        <div className='my-7'>
          <h2 className='text-center text-gray-400'>AI Travel Planner - Created with ♥️ by Karan</h2>
        </div>

    </div>
  )
}

export default Hero
