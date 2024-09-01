import React from 'react';
import DjCard from '../components/DjCard'

const Djs = ({ djsList }) => {
  return (
    <section className="djs flex flex-col w-[100vw] h-[60vh] my-4 p-0">
      <div className='flex h-2/10 justify-center items-center top-0'>
        <p className='text-3xl'>Disk Jokeys</p>
      </div>

      <div className='relative h-full w-full overflow-hidden'>
        <ul className='absolute whitespace-nowrap animate-scroll flex h-full w-full m-0 px-2'>
            {
              djsList?.map((dj, index) => (
                <li key={index} className="dj cursor-pointer inline-block px-4 h-full p-0 m-0 mx-2">
                  <DjCard key={index} dj={dj}/>
                </li>
            ))
            }
        </ul>
      </div>
    </section>
  )
}

export default Djs
