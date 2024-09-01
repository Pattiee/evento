import React from 'react'
import { FaHeadphones, FaMusic } from 'react-icons/fa'

export default function DjCard ({ dj }) {
  return (
    <div className=' max-w-sm mx-auto bg-black text-white rounded-lg shadow-lg overflow-hidden'>
      {/* DJ Image */}
      <div className='relative'>
        <img className='w-full h-48 object-cover' src="" alt={dj?.name}/>
        <div className='absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <FaHeadphones className='text-white text-6xl'/>
        </div>
      </div>


      {/* DJ Info */}
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-2 text-center'>{dj?.name}</h2>
        <p className='text-center text-gray-400 mb-4'>Bringing the best to life</p>
        <div className='flex items-center justify-center mb-4'>
          <FaMusic className='text-neon_pink text-2xl mr-2'/>
          <span className='text-xl'>House | EDM | Hip-Hop</span>
        </div>

        {/* Booking Button */}
        <div className='flex justify-center'>
          <button className='bg-neon_green hover:bg-neon_green_dark text-black font-bold py-2 px-4 rounded-full'>Book Now</button>
        </div>
      </div>

    </div>
  )
};
