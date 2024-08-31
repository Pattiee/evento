import React from 'react';
import Navbar from './Navbar';

const Header = () => {
  return (
    <div className='header flex flex-col min-h-[100vh] min-w-full text-white'>

      <div className='flex flex-col h-[84vh] mt-[16vh] justify-center z-50 justify-items-center'>
        <p className='flex flex-col justify-center items-center text-9xl text-primary text-nowrap text-opacity-90 select-none'>Call for Code</p>
        <p className='flex flex-col justify-center items-center text-3xl font-serif underline underline-offset-4 select-none'>Toronto, Canada</p>
      </div>
    </div>
  )
}

export default Header;
