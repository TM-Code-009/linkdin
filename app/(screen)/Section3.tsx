import Image from 'next/image'
import React from 'react'
import { BsInfoSquareFill } from 'react-icons/bs'
import { FaInfo, FaLongArrowAltRight, FaPlus } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'

const Section3 = () => {
    const data = [
        {
            id:1,
            name:"Google",
            desc:"Company • Software Development",
            image:"https://www.linkedin.com/company/google/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9bXjtWL0Q8ea72zUb2EljA%3D%3D"
        },
        {
            id:2,
            name:"Amandeep Gautam",
            desc:"Product Engineer 🇮🇳@ Tesla Motors | AutoCAD, CSBA, Deep Learning, ANN,",
            image:"https://www.linkedin.com/in/amandeep-gautam-1aba78171/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B9bXjtWL0Q8ea72zUb2EljA%3D%3D"
        },
        {
            id:2,
            name:"Software Development",
            desc:"Company",
            image:"https://media.licdn.com/dms/image/C4E0BAQEJpmQ7KybPAQ/company-logo_100_100/0/1674600198508?e=1729728000&v=beta&t=2YUY1dgLsnioJeEXq5zhA3e82AuMv0YA97o8t06YGSw"
        }
    ]

    const nav = [
        {
            id:1,
            name:'About',
        },
        {
            id:2,
            name:'Accessibility',
        },
        {
            id:3,
            name:'Help Center',
        },
        {
            id:4,
            name:'Privacy & Terms',
        },
        {
            id:5,
            name:'Ad Choices',
        },
        {
            id:6,
            name:'Advertising',
        },
        {
            id:7,
            name:'Business Services',
        },
        {
            id:8,
            name:'Get Linkdin App',
        },
        {
            id:9,
            name:'More',
        },
    ]
  return (
     <main className='hidden h-full w-full lg:flex flex-col relative -webkit-sticky'>
        <div className='w-full min-h-[200px] flex flex-col p-4 border rounded-md bg-white'>
           <div className='flex justify-between '>
              <p className='font-semibold'>Add to your feed</p>
              <BsInfoSquareFill className='text-[14px]' />
           </div>
           <div className='w-full h-full mt-5 flex flex-col gap-4'>
             {
                data.map((el:any) => (
                    <div key={el.id} className='flex gap-2'>
                        <Image src={el.image} alt='avatar' width={1000} height={1000} className='h-[35px] w-[35px] rounded-full object-contain'/>
                        <div className='flex flex-col gap-1'>
                            <p className='text-[12px] font-semibold'>{el.name}</p>
                            <p className='text-[12px]'>{el.desc}</p>
                            <button className='w-[100px] h-[35px] rounded-full flex justify-center items-center bg-slate-200 border gap-2'><FaPlus />Follow</button>
                        </div>
                    </div>
                ))
             } 
           </div>

           <div className='text-[14px]  gap-2 flex items-center mt-5'>
           View all recommendations <FaLongArrowAltRight />

           </div>
        </div>
        <div className='mt-5 flex justify-center items-center flex-col'>
           <div className='flex justify-center items-center bg-white h-[50px] w-full rounded-md gap-2 text-slate-300 font-semibold text-[16px]'><span className='h-[35px] w-[50px] bg-orange-300 rounded-md flex justify-center items-center text-[14px] text-neutral-700 font-normal '>NEW</span> Get the LinkedIn Windows App</div>

           <div className='text-center flex flex-wrap justify-center items-center gap-3 mt-5 sticky top-10 ;'>
              {
                nav.map((el:any) => (
                    <p className='text-[12px] text-slate-300 hover:text-blue-500 hover:underline cursor-pointer'>{el.name}</p>
                ))
              }
           </div>

           <div className='flex items-center text-[12px] text-slate-300 gap-3 mt-5'><GrLinkedin className='text-blue-500'/> LinkedIn Corporation © 2024</div>

        </div>
     </main>
  )
}

export default Section3