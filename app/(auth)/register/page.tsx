import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React from 'react'
import { FaGithub, FaGoogle, FaSquareFacebook } from 'react-icons/fa6'

const page = async() => {
    const mainacction = async(formData:FormData) => {
        "use server"

            const name = formData.get("name")
            const email = formData.get("email")
            const password = formData.get("password")
           
            const newurl= "http://localhost:3000/api"
            await fetch(newurl,
                {method:"POST",
                   headers:{
                    "Content-Type": "application/json"
                   } ,
                   body: JSON.stringify({name,email,password})

                }
            ).then(() => {
               return redirect("/signin")
            })
       
    }
  return (
    <main className='m-2 p-2 border rounded-md' >
        <div className='w-full h-[calc(100vh-40px)] flex justify-center items-center'>
          <section className='w-full md:w-[80%] lg:w-[500px] p-2 rounded-md min-h-[300px] border'>
          <p className='font-semibold uppercase text-center mt-5 pb-5 border-b'>This is register screen</p>

          <form action={mainacction} >
            <div className='flex flex-col mt-5'>
                <label className='font-semibold text-[12px] mb-2'>Name</label>
                <input placeholder="Enter your name" className= "border rounded-md outline-none h-[45px] pl-2" type="text" name="name"/>
            </div>
            <div className='flex flex-col mt-5'>
                <label className='font-semibold text-[12px] mb-2'>Email</label>
                <input placeholder="Enter your email" className= "border rounded-md outline-none h-[45px] pl-2 " type="text" name="email" />
            </div>
            <div className='flex flex-col mt-5'>
                <label className='font-semibold text-[12px] mb-2'>Password</label>
                <input  className= "border rounded-md outline-none h-[45px] pl-2 " type="text" name="password" />
            </div>

            <Button type="submit" className='w-full mt-5 h-[45px] flex justify-center items-center'>Register</Button>

            <div className='text-center text-[12px] mt-3 border-b'>Already have an account please <Link href={"/signin"} className='italic font-semibold'>Sign-in here</Link></div>

            <div className='mt-5 flex flex-col px-2'>
                <p>Social usage</p>

                <div className='flex justify-center items-center text-[45px] gap-3  '><div className='text-blue-500'><FaSquareFacebook /></div>
                <div className='text-orange-700'><FaGoogle /></div>
                <div className='text-neutral-700'><FaGithub /></div>
                </div>
               
            </div>
          </form>
          </section>
        </div>
    </main>
  )
}

export default page