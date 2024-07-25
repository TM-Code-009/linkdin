"use client";

import React from 'react'
import { MdImage } from 'react-icons/md';

const Createpost = () => {
  return (
    <main className='flex flex-col justify-center items-center'>
       <div className='min-w-[300px] min-h-[200px] border flex flex-col 
       p-4 '>
          <p>Createpost</p>
          <div className='w-full mt-5'>
            <hr />
          </div>
          <div className='mt-10 flex flex-col gap-5'>

            <div className='flex flex-col'>
              <label>Description</label>
              <input type="text" className='w-[100px]' />
            </div>

            <div className='flex flex-col'>
              <label>Description</label>
              <input type="text" />
            </div>
            
            </div>
       </div>
    </main>
  )
}

export default Createpost