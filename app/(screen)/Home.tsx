import React from 'react'
import Section2 from './Section2'
import Section1 from './section1'
import Section3 from './Section3'

const Home = () => {
  return (
    <main className='flex flex-col lg:grid lg:grid-cols-10 w-full gap-5 min-h-[300px]'>
        <section  className='col-span-2'><Section1/></section>
        <section className='col-span-5 ml-2'><Section2/></section>
        <section className='col-span-3'><Section3/></section>
    </main>
  )
}

export default Home