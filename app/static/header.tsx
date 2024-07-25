"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect, usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { CiLinkedin } from 'react-icons/ci'
import { FaSearch } from 'react-icons/fa'
import { GrLinkedin } from 'react-icons/gr'
import { IoIosBriefcase } from 'react-icons/io'
import { IoHome } from 'react-icons/io5'
import { MdCreateNewFolder } from 'react-icons/md'
import { SlPeople } from 'react-icons/sl'
import { useDispatch } from 'react-redux'
import { authuser } from '../global/slice'

const Header = () => {
    const dispatch = useDispatch()
    const pathname = usePathname()

    const navdata = [
        {
            id:1,
            name: 'Home',
            icon: <IoHome />,
            path: '/',
        },
        {
            id:2,
            name: 'My Network',
            icon: <SlPeople />,
            path: '',
        },
        {
            id:3,
            name: 'Jobs',
            icon: <IoIosBriefcase />,
            path: '',
        },
        {
            id:4,
            name: 'Create',
            icon: <MdCreateNewFolder />,
            path: './create',
        },
    ]

  return (
    <main className='w-full h-[60px] flex justify-center items-center bg-white z-20 '>
        <main className='w-full h-[60px] flex justify-center items-center bg-white fixed'>
        <div className='w-[90%] h-full flex justify-between items-center border-b'>
            <div className='flex items-center gap-1'>
                <div className='text-[45px] text-blue-500'><GrLinkedin/></div>

                <input type="text"  placeholder= "Search" className='w-[200px] lg:w-[300px] h-[35px] border rounded-md px-3 bg-slate-100' />
            </div>
            <div className={`hidden lg:flex items-center h-full gap-3 text-[30px] ` }   >
               
               {navdata.map((el:any) => (
                <Link href={el.path} key={el.id} className={`${pathname === el.path? "hover:border-b-2 h-full":""}`}>
                <div className={`cursor-pointer w-[100px] h-full flex flex-col  justify-center items-center text-slate-700 hover:text-black text-[20px]`}>
                    {el.icon}
                    <span className={`text-[14px] `}>{el.name}</span>
                </div>
                </Link>
                ))}
               
                
            </div>

            <Button onClick={() => {
                dispatch(authuser(null))
                redirect("/signin")
            }}>
              signout
            </Button>
        </div>
    </main>
    </main>
  )
}

export default Header



{/* <div className={`cursor-pointer w-[100px] h-full flex flex-col  justify-center items-center text-slate-700 hover:text-black `} ><IoHome /> <span className='text-[14px]'>Home</span></div>

<div className={`cursor-pointer w-[100px] h-full flex flex-col  justify-center items-center text-slate-700 hover:text-black `} ><SlPeople /><span className='text-[14px]'>My Network</span></div>

<div className={`cursor-pointer w-[100px] h-full flex flex-col  justify-center items-center text-slate-700 hover:text-black $`} ><IoIosBriefcase /><span className='text-[14px]'>Jobs</span>
</div> */}