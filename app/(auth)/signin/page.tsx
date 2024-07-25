"use client"

import { authuser } from '@/app/global/slice'
import { Button } from '@/components/ui/button'
import { Toaster } from '@/components/ui/toaster'
import { useToast } from '@/components/ui/use-toast'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import React, { useState } from 'react'
import { FaGithub, FaGoogle, FaSquareFacebook } from 'react-icons/fa6'
import { useDispatch } from 'react-redux'

const Page = () => {
    const { toast } = useToast()
    const [errer,seterror] = useState<string>("")
    const dispatch= useDispatch()  

    const mainacction = async(formData:FormData) => {

        // "use server"
            

            const email = formData.get("email")
            const password = formData.get("password")
           
            const newurl= "https://linkdin.vercel.app:3000"
            await fetch(`${newurl}/api/signin`,
                {method:"POST",
                   headers:{
                    "Content-Type": "application/json"
                   } ,
                   body: JSON.stringify({email,password})

                }
            ).then(async(res) => {
               const read = await res.json();

               if(read.status === 200){
                   dispatch(authuser(read?.data))
                   redirect("/")
               }else{
                  toast({
                      description: `${read.message}`,
                    })
               }
            })
      
    }
    
  return (
    <main className='m-2 p-2 border rounded-md' >
            <Toaster />
        <div className='w-full h-[calc(100vh-40px)] flex justify-center items-center'>
      
          <section className='w-full md:w-[80%] lg:w-[500px] p-2 rounded-md min-h-[300px] border'>
          <p className='font-semibold uppercase text-center mt-5 pb-5 border-b'>This is signin screen</p>

          <form action={mainacction}>
            <div className='flex flex-col mt-5'>
                <label className='font-semibold text-[12px] mb-2'>Email</label>
                <input placeholder="Enter your email" className= "border rounded-md outline-none h-[45px] pl-2 " type="text" name="email" />
            </div>
            <div className='flex flex-col mt-5'>
                <label className='font-semibold text-[12px] mb-2'>Password</label>
                <input  className= "border rounded-md outline-none h-[45px] pl-2 " type="text" name="password" />
            </div>

            <Button className='w-full mt-5 h-[45px] flex justify-center items-center'>Signin</Button>

            <div className='text-center text-[12px] mt-3 border-b'>Don't have an account please <Link href={"/register"} className='italic font-semibold'>Register here</Link></div>

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

export default Page