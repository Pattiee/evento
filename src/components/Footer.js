import React from 'react'

const Footer = () => {
  return (
    <footer className='flex flex-col h-[100vh] justify-between pt-5'>
        <div className='h-1/6 flex'>
            <p className=' text-8xl h-full px-12 text-primary font-light'>Evento</p>
        </div>

        <div className='h-2/3 pt-4'>
            <ul className='flex flex-row justify-around h-full'>

                <li className='h-[100%] hover:bg-primary duration-300 rounded-xl w-1/4 m-0 p-0 hover:shadow-2xl hover:shadow-black hover:text-white cursor-pointer'>
                    <p className='flex text-3xl font-serif h-1/4 justify-center items-center'>Offices</p>
                    <div className='flex flex-col h-3/4 py-2'>
                        Office map here
                    </div>
                </li>

                <li className='h-[100%] hover:bg-primary duration-300 rounded-xl w-1/4 m-0 p-0 hover:shadow-2xl hover:shadow-black hover:text-white cursor-pointer'>
                    <p className='flex text-3xl font-serif h-1/4 justify-center items-center'>Contact</p>
                    <div className='flex flex-col h-3/4 py-2'>
                        <label htmlFor="phone"><i class="fas fa-phone">+254716227064</i></label>
                        <label htmlFor="email"><i class="fas fa-email">info@evento.co.ke</i></label>
                        <label htmlFor="phone"><i class="fab fa-phone">Working 24/7</i></label>
                    </div>
                </li>

                <li className='h-[100%] hover:bg-primary duration-300 rounded-xl w-1/4 m-0 p-0 hover:shadow-2xl hover:shadow-black hover:text-white cursor-pointer'>
                    <p className='flex text-3xl font-serif h-1/4 justify-center items-center'>Gallery</p>
                    <div className='flex flex-col h-3/4 py-2'>
                        <p>This are our affiliates</p>
                    </div>
                </li>

                <li className='h-[100%] hover:bg-primary duration-300 rounded-xl w-1/4 m-0 p-0 hover:shadow-2xl hover:shadow-black hover:text-white cursor-pointer'>
                    <p className='flex text-3xl font-serif h-1/4 justify-center items-center'>Quick Links</p>
                    <ul className='flex flex-col h-3/4 py-2'>
                        <li>About</li>
                        <li>Contact Us</li>
                        <li>Media</li>
                        <li>Events</li>
                        <li>Careers</li>
                    </ul>
                </li>

            </ul>
        </div>

        <div className='h-1/6 flex justify-between pt-10'>
            <div className='flex w-1/3 justify-center items-center'>
                <select name="lang" id="lang">
                    <option value="en">English</option>
                    <option value="fn">French</option>
                    <option value="gn">German</option>
                </select>
            </div>

            <div className='flex w-1/3 justify-center items-center'>
                <span>&copy; <em>{new Date().getFullYear()}</em> Evento, Inc | <small>All rights reserved</small></span>
            </div>

            <div className='flex w-1/3 justify-center items-center'>
                <h1>Social media icons here</h1>
            </div>
        </div>
    </footer>
  )
}

export default Footer
