import React from 'react'
import { useAuth } from '../hooks/useAuth'

const Navbar = () => {
    const { user } = useAuth();


  return (
    <nav className='flex flex-row min-w-full h-[16vh] shadow-2xl shadow-black justify-between backdrop-blur'>
        <div className='flex left-0 w-1/4 justify-center items-center'>
            <p className='text-4xl text-primary cursor-pointer'><a href="/">Evento</a></p>
        </div>

        <ul className='flex flex-row h-full w-1/2 items-center justify-around'>
            <li className='text-xl hover:bg-primary transition ease-in-out duration-300 px-4 py-2 text-white rounded-xl hover:scale-105 cursor-pointer'>Home</li>
            <li className='text-xl hover:bg-primary transition ease-in-out duration-300 px-4 py-2 text-white rounded-xl hover:scale-105 cursor-pointer'>Services</li>
            <li className='text-xl hover:bg-primary transition ease-in-out duration-300 px-4 py-2 text-white rounded-xl hover:scale-105 cursor-pointer'>Blog</li>
            <li className='text-xl hover:bg-primary transition ease-in-out duration-300 px-4 py-2 text-white rounded-xl hover:scale-105 cursor-pointer'>Contact Us</li>
        </ul>

        <div className='flex justify-around items-center h-full w-1/4'>
            <div className='theme'>
                <p>T</p>
            </div>

            <div className='account'>
                {
                    user
                    ?
                    <div className='w-[60px] h-[60px] justify-center items-center p-1'>
                        <p className='text-primary text-3xl border border-primary rounded-full p-2'>{user?.name[0]}</p>
                    </div>
                    :
                    <div>
                        <h1>Account</h1>
                    </div>
                }
            </div>
        </div>
    </nav>
  )
}

export default Navbar
